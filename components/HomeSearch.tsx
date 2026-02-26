"use client";

import { useEffect, useState } from "react";

type Job = {
  id: number;
  title: string;
  slug: string;
};

export default function HomeSearch() {
  const [q, setQ] = useState<string>("");
  const [results, setResults] = useState<Job[]>([]);
  const [searched, setSearched] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(async () => {

      if (q.length < 2) {
        setSearched(false);
        return;
      }

      try {
        const res = await fetch(
          `https://indiajobs-2.onrender.com/search/?q=${q}`
        );

        if (!res.ok) return;

        const data: Job[] = await res.json();
        setResults(data);
        setSearched(true);

      } catch (e) {
        console.error(e);
      }

    }, 400);

    return () => clearTimeout(timer);

  }, [q]);

  return (
    <div className="relative w-full md:w-96">

      {/* INPUT */}
      <input
        value={q}
        onChange={(e) => {
          const value = e.target.value;
          setQ(value);

          if (value.length < 2) {
            setResults([]);
            setSearched(false);
          }
        }}
        placeholder="Search jobs, departments, exams..."
        className="border px-5 py-3 rounded w-full text-black"
      />

      {/* RESULTS DROPDOWN */}
      {(results.length > 0 || (searched && results.length === 0)) && (
        <div className="absolute bg-white border w-full mt-1 rounded shadow z-50 max-h-72 overflow-y-auto">

          {results.length > 0 ? (
            results.map((job) => (
              <a
                key={job.id}
                href={`/jobs/${job.slug}`}
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
              >
                {job.title}
              </a>
            ))
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500">
              No results found
            </div>
          )}

        </div>
      )}

    </div>
  );
}