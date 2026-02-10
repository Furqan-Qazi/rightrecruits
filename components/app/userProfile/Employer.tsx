"use client";

import { useEffect, useState } from "react";
import InputField from "../../global/InputField";
import TextAreaField from "../../global/TextAreaField";
import { getEmployerByUser, saveEmployer } from "@/src/lib/employer";

export default function EmployerSection() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [size, setSize] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");

  /* ================= LOAD EMPLOYER ================= */
  useEffect(() => {
    const loadEmployer = async () => {
      const employer = await getEmployerByUser();

      if (employer) {
        setName(employer.company_name || "");
        setIndustry(employer.industry || "");
        setSize(employer.company_size || "");
        setWebsite(employer.website || "");
        setDescription(employer.description || "");
      }

      setLoading(false);
    };

    loadEmployer();
  }, []);

  /* ================= SAVE ================= */
  const saveHandler = async () => {
    const { error } = await saveEmployer({
      company_name: name,
      industry,
      company_size: size,
      website,
      description,
    });

    if (error) setMessage("Save failed ❌");
    else setMessage("Saved successfully ✅");
  };

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <section className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8 space-y-6">
      <div className="flex justify-between border-b pb-2">
        <h2 className="text-2xl text-gray-700 font-bold">Company Info</h2>
        <button
          onClick={saveHandler}
          className="bg-zinc-700 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>

      {message && <p className="text-green-600">{message}</p>}

      <div className="grid md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded">
        <InputField
          label="Company Name"
          value={name}
          setValue={(v) => setName(v.toString())}
        />
        <InputField
          label="Industry"
          value={industry}
          setValue={(v) => setIndustry(v.toString())}
        />
        <InputField
          label="Company Size"
          value={size}
          setValue={(v) => setSize(v.toString())}
        />
        <InputField
          label="Website"
          value={website}
          setValue={(v) => setWebsite(v.toString())}
        />
        <TextAreaField
          className="md:col-span-2"
          placeholder="Description"
          value={description}
          setValue={(v) => setDescription(v.toString())}
        />
      </div>
    </section>
  );
}
