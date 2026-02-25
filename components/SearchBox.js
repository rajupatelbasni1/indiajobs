"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SearchBox() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (q.length < 2) {
      setResults([]);
      return;
    }

    const delay = setTimeout(async () => {
      const res = await fetch(
        `https://indiajobs-2.onrender.com/search/?q=${q}`
      );
      const data = await res.json();
      setResults(data);
    }, 300);

    return () => clearTimeout(delay);
  }, [q]);

  return (
    <div className="relative w-full max-w-xl">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search govt jobs, railway, police..."
        className="w-full p-3 border rounded"
      />

      {/* suggestions */}
      {results.length > 0 && (
        <div className="absolute bg-white border w-full mt-1 rounded shadow">
          {results.map((job) => (
            <Link
              key={job.slug}
              href={`/jobs/${job.slug}`}
              className="block p-2 hover:bg-gray-100"
            >
              {job.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}