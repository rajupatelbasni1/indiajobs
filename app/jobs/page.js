import { jobs } from "@/data/jobs";
import JobCard from "@/components/JobCard";

export default function Jobs() {
  return (
    <main className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Latest Govt & Private Jobs
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}

// "use client";

// import { jobsStore } from "@/data/store";
// import JobCard from "@/components/JobCard";

// export default function Jobs() {
//   return (
//     <main className="p-10 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">
//         Latest Vacancies
//       </h1>

//       {jobsStore.length === 0 && (
//         <p>No jobs uploaded yet. Go to /admin to add one.</p>
//       )}

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {jobsStore.map((job) => (
//           <JobCard key={job.id} job={job} />
//         ))}
//       </div>
//     </main>
//   );
// }
