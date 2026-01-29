"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabaseClient";
import JobSearch from "@/components/app/jobsearch/JobSearch";
import { Search, Filter } from "lucide-react";

export default function JobSearchPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchJobs = async () => {
    setLoading(true);

    let query = supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false });

    if (search.trim() !== "") {
      const isNumber = !isNaN(Number(search));

      query = query.or(
        isNumber
          ? `job_title.ilike.%${search}%,job_description.ilike.%${search}%,employment_type.ilike.%${search}%,location.ilike.%${search}%,company_name.ilike.%${search}%,salary_min.eq.${search},salary_max.eq.${search}`
          : `job_title.ilike.%${search}%,job_description.ilike.%${search}%,employment_type.ilike.%${search}%,location.ilike.%${search}%,company_name.ilike.%${search}%`,
      );
    } else {
      query = query.limit(9); // 🔥 only when no search
    }

    const { data, error } = await query;

    if (!error) setJobs(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();

    const channel = supabase
      .channel("jobs-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "jobs" },
        () => fetchJobs(),
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  // 🔄 Re-fetch when search changes
  useEffect(() => {
    fetchJobs();
  }, [search]);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading jobs...</p>;
  }

  const [featuredJob, ...otherJobs] = jobs;

  return (
    <section className="max-w-7xl mx-auto my-10 px-4">
      {/* 🔥 Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        🔥 Latest Job Posts
      </h1>

      {/* 🔍 Search + Buttons Row */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
        {/* Search Input */}
        <div className="flex-1 w-full relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search jobs by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Filter Button */}
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition">
          <Filter size={18} />
          Filter
        </button>

        {/* Search Button */}
        <button
          onClick={fetchJobs}
          className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
        >
          <Search size={18} />
          Search
        </button>
      </div>

      {/* ⭐ Featured Job */}
      {featuredJob && (
        <div className="mb-8">
          <JobSearch job={featuredJob} />
        </div>
      )}

      {/* 📦 Job Grid */}
      {otherJobs.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherJobs.map((job) => (
            <JobSearch key={job.id} job={job} />
          ))}
        </div>
      )}
    </section>
  );
}
