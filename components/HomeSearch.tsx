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

  useEffect(() => {
    const timer = setTimeout(async () => {

      // ❌ yaha setState nahi karna
      if (q.length < 2) return;

      try {
        const res = await fetch(
          `https://indiajobs-2.onrender.com/search/?q=${q}`
        );

        if (!res.ok) return;

        const data: Job[] = await res.json();
        setResults(data);

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

          // ✅ clear yaha karna allowed hai
          if (value.length < 2) setResults([]);
        }}
        placeholder="Search jobs, departments, exams..."
        className="border px-5 py-3 rounded w-full text-black"
      />

      {/* RESULTS */}
      {results.length > 0 && (
        <div className="absolute bg-white border w-full mt-1 rounded shadow z-50 max-h-72 overflow-y-auto">

          {results.map((job) => (
            <a
              key={job.id}
              href={`/jobs/${job.slug}`}
              className="block px-4 py-2 hover:bg-gray-100 text-sm"
            >
              {job.title}
            </a>
          ))}

        </div>
      )}
    </div>
  );
}