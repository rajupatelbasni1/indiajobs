"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HomeSearch() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (q.length < 2) {
      setResults([]);
      return;
    }

    const delay = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://indiajobs-2.onrender.com/search/?q=${q}`
        );
        const data = await res.json();
        setResults(data);
      } catch {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(delay);
  }, [q]);

  const handleSearch = () => {
    if (!q) return;
    router.push(`/search?q=${q}`);
  };

  return (
    <div className="mt-6 flex flex-col md:flex-row gap-3 justify-center relative">

      {/* INPUT */}
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search jobs, departments, exams..."
        className="border px-5 py-3 rounded w-full md:w-96 text-black"
      />

      {/* BUTTON */}
      <button
        onClick={handleSearch}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Search Jobs
      </button>

      {/* LIVE SUGGESTIONS */}
      {results.length > 0 && (
        <div className="absolute top-full mt-1 bg-white border w-full md:w-96 rounded shadow z-50">
          {results.map((job) => (
            <Link
              key={job.slug}
              href={`/jobs/${job.slug}`}
              className="block p-3 hover:bg-gray-100 text-left"
            >
              {job.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}