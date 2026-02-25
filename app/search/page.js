export default async function SearchPage({ searchParams }) {
  const q = searchParams.q || "";

  const res = await fetch(
    `https://indiajobs-2.onrender.com/search/?q=${q}`,
    { cache: "no-store" }
  );

  const jobs = await res.json();

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl mb-5">Search Results</h1>

      {jobs.map((job) => (
        <a key={job.slug} href={`/jobs/${job.slug}`} className="block border p-4 mb-3 rounded">
          <h2 className="font-bold">{job.title}</h2>
          <p>{job.department}</p>
        </a>
      ))}
    </div>
  );
}