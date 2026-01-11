"use client";

import InputField from "../../../components/global/InputField";
import TextAreaField from "../../../components/global/TextAreaField";
import { useState } from "react";
import { FaTrashAlt, FaPlus, FaEdit } from "react-icons/fa"; // icons

type Education = {
  id: string;
  school: string;
  degree: string;
  field: string;
  from: string;
  to: string;
  description: string;
};

export default function EducationSection() {
  const [list, setList] = useState<Education[]>([]);
  const [form, setForm] = useState<Education>({
    id: "",
    school: "",
    degree: "",
    field: "",
    from: "",
    to: "",
    description: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  const addEducation = () => {
    if (!form.school || !form.degree || !form.from) return;

    if (editingId) {
      // EDIT
      setList((prev) =>
        prev.map((e) => (e.id === editingId ? { ...form, id: editingId } : e))
      );
      setEditingId(null);
    } else {
      setList((prev) => [...prev, { ...form, id: Date.now().toString() }]);
    }

    setForm({
      id: "",
      school: "",
      degree: "",
      field: "",
      from: "",
      to: "",
      description: "",
    });
  };

  const removeEducation = (id: string) => {
    setList((prev) => prev.filter((e) => e.id !== id));
  };

  const editEducation = (e: Education) => {
    setForm(e);
    setEditingId(e.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8">
      <h2 className="text-3xl font-bold border-b pb-2">🎓 Education</h2>

      {/* LIST */}
      <div className="space-y-4">
        {list.map((e) => (
          <div
            key={e.id}
            className="flex justify-between items-start p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div className="space-y-1">
              <h3 className="font-semibold text-lg">{e.school}</h3>
              <p className="text-sm text-gray-700">
                {e.degree} — {e.field || "N/A"}
              </p>
              <p className="text-xs text-gray-500">
                {e.from} – {e.to || "Present"}
              </p>
              {e.description && <p className="text-sm mt-2">{e.description}</p>}
            </div>
            <div className="flex gap-2 mt-1">
              <button
                onClick={() => editEducation(e)}
                className="text-blue-500 hover:text-blue-700"
                title="Edit"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => removeEducation(e.id)}
                className="text-red-500 hover:text-red-700"
                title="Remove"
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-10 p-6 rounded-lg shadow-inner">
        <InputField
          label="Fill The Form"
          placeholder="School / University"
          value={form.school}
          setValue={(value) => setForm({ ...form, school: value })}
        />

        <InputField
          className="input mt-5"
          placeholder="Degree"
          value={form.degree}
          setValue={(value) => setForm({ ...form, degree: value })}
        />

        <InputField
          className="input md:col-span-2"
          placeholder="Field of Study"
          value={form.field}
          setValue={(value) => setForm({ ...form, field: value })}
        />

        <InputField
          className="input"
          placeholder="From (e.g. 2021)"
          value={form.from}
          setValue={(value) => setForm({ ...form, from: value })}
        />

        <InputField
          className="input"
          placeholder="To (e.g. 2025)"
          value={form.to}
          setValue={(value) => setForm({ ...form, to: value })}
        />

        <TextAreaField
          className="input md:col-span-2"
          placeholder="Description / Achievements"
          rows={4}
          value={form.description}
          setValue={(value) => setForm({ ...form, description: value })}
        />
      </div>

      <button
        onClick={addEducation}
        className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all"
      >
        <FaPlus />
        {editingId ? "Update Education" : "Add Education"}
      </button>
    </section>
  );
}
