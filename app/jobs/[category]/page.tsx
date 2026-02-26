import { notFound } from "next/navigation";

type Job = {
  id: number;
  title: string;
  slug: string;
  category: string;
};

async function getJobs(category: string): Promise<Job[]> {
  try {
    const res = await fetch(
      `https://indiajobs-2.onrender.com/posts/?category=${category}`,
      { cache: "no-store" }
    );

    if (!res.ok) return [];

    return res.json();
  } catch {
    return [];
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const jobs = await getJobs(category.toLowerCase());

  if (!jobs) return notFound();

  return (
    <main className="max-w-6xl mx-auto p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {category.replace("-", " ")} Jobs
      </h1>

      {jobs.length === 0 && (
        <p className="text-gray-500">
          No posts found in this category.
        </p>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        {jobs.map((job) => (
          <a
            key={job.id}
            href={`/jobs/${job.slug}`}
            className="border rounded-xl p-5 bg-white shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{job.title}</h3>
          </a>
        ))}
      </div>
    </main>
  );
}