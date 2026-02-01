"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabaseClient";
import JobSearch from "@/components/app/jobsearch/JobSearch";
import { Search, Filter } from "lucide-react";
import JobFilter from "@/components/app/jobsearch/JobFilter";

export default function JobSearchPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [filterOpen, setFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    company_name: "",
    location: "",
    employment_type: "",
    salary_min: "",
    salary_max: "",
  });

  const fetchJobs = async () => {
    setLoading(true);

    let query = supabase.from("jobs").select("*");

    // 🔍 Search
    if (search) {
      query = query.or(
        `job_title.ilike.%${search}%,job_description.ilike.%${search}%`,
      );
    }

    // 🎯 FILTER (OR LOGIC)
    const orFilters: string[] = [];

    if (filters.company_name)
      orFilters.push(`company_name.ilike.%${filters.company_name}%`);

    if (filters.location)
      orFilters.push(`location.ilike.%${filters.location}%`);

    if (filters.employment_type)
      orFilters.push(`employment_type.eq.${filters.employment_type}`);

    if (filters.salary_min)
      orFilters.push(`salary_min.gte.${Number(filters.salary_min)}`);

    if (filters.salary_max)
      orFilters.push(`salary_max.lte.${Number(filters.salary_max)}`);

    if (orFilters.length > 0) {
      query = query.or(orFilters.join(","));
    }

    const { data, error } = await query.order("created_at", {
      ascending: false,
    });

    if (error) {
      console.error(error);
      setJobs([]);
    } else {
      setJobs(data || []);
    }

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
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search jobs by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-10 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Clear / Cancel Button */}
          {search && (
            <div
              onClick={() => {
                setSearch(""); // clear input
                fetchJobs(); // immediately fetch original jobs
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition cursor-pointer text-xl font-bold select-none"
              title="Clear search"
            >
              ×
            </div>
          )}
        </div>

        {/* Filter Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // 🔥 VERY IMPORTANT
            setFilterOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition"
        >
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

      {/* ⏳ Loading */}
      {/* {loading && (
        <p className="text-center mt-10 text-gray-500">Loading jobs...</p>
      )} */}

      {/* ❌ No jobs found */}
      {!loading && jobs.length === 0 && (
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold text-gray-700">No jobs found</h3>
          <p className="text-gray-500 mt-2">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}

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

      <JobFilter
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
        onApply={() => {
          setFilterOpen(false);
          fetchJobs();
        }}
      />
    </section>
  );
}
