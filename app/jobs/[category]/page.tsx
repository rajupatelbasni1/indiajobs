type Props = {
  params: Promise<{ category: string }>;
};

type Job = {
  id: number;
  title: string;
  slug: string;
  department?: string;
  status?: string;
  last_date?: string;
  category?: string;
};

async function getJobs(category: string): Promise<Job[]> {
  const res = await fetch(
    `https://indiajobs-2.onrender.com/posts/category/${category}/`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];

  return res.json();
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const jobs = await getJobs(category);

  return (
    <main className="max-w-6xl mx-auto p-6">

      <h1 className="text-2xl font-bold capitalize mb-6">
        {category} Jobs
      </h1>

      {jobs.length === 0 && (
        <p>No posts found in this category.</p>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        {jobs.map((job: Job) => (
          <a
            key={job.id}
            href={`/jobs/${job.slug}`}
            className="border p-4 rounded shadow"
          >
            <h3 className="font-semibold">{job.title}</h3>
          </a>
        ))}
      </div>

    </main>
  );
}