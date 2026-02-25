"use client";

import { useEffect, useState } from "react";

export default function SearchBox() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const delay = setTimeout(async () => {

      // 👇 agar 2 char se kam hai to bas return karo (NO setState here)
      if (q.length < 2) return;

      try {
        const res = await fetch(
          `https://indiajobs-2.onrender.com/search/?q=${q}`
        );

        if (!res.ok) return;

        const data = await res.json();
        setResults(data);

      } catch (e) {
        console.error(e);
      }

    }, 400);

    return () => clearTimeout(delay);

  }, [q]);

  return (
    <div className="relative">
      <input
        value={q}
        onChange={(e) => {
          const val = e.target.value;
          setQ(val);

          // 👇 input handler me clear karna allowed hai
          if (val.length < 2) setResults([]);
        }}
        placeholder="Search jobs..."
        className="border px-5 py-3 rounded w-full text-black"
      />

      {results.length > 0 && (
        <div className="absolute bg-white border w-full mt-1 rounded shadow z-50 max-h-64 overflow-y-auto">

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