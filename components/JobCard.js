import Link from "next/link";

export default function JobCard({ job }) {
  return (
    <Link href={`/jobs/${job.slug}`}>
      <div className="border p-5 rounded-xl shadow hover:shadow-lg transition bg-white">
        <h2 className="text-xl font-bold">{job.title}</h2>

        <p className="text-gray-600 mt-1">{job.department}</p>

        <div className="text-sm mt-2 text-gray-700">
          <p>📍 {job.location}</p>
          <p>🎂 Age: {job.age}</p>
          <p>📅 Last Date: {job.lastDate}</p>
        </div>

        <p className="mt-3 text-gray-600 text-sm line-clamp-2">
          {job.description}
        </p>
      </div>
    </Link>
  );
}
