// import { jobs } from "@/data/jobs";
// import { notFound } from "next/navigation";

// export default function JobPage({ params }) {
//   const job = jobs.find((j) => j.slug === params.slug);

//   if (!job) return notFound();

//   return (
//     <main className="p-10 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold">{job.title}</h1>

//       <p className="text-gray-600 mt-2">{job.department}</p>

//       <div className="mt-6 space-y-2 text-lg">
//         <p><b>Location:</b> {job.location}</p>
//         <p><b>Age Limit:</b> {job.age}</p>
//         <p><b>Last Date:</b> {job.lastDate}</p>
//       </div>

//       <div className="mt-6 text-gray-700 leading-7">
//         <p>{job.description}</p>
//         <p className="mt-4">
//           Yaha full job details, eligibility, salary, PDF, apply link etc aayega.
//         </p>
//       </div>
//     </main>
//   );
// }
// "use client";

// import { jobsStore } from "@/data/store";
// import { notFound } from "next/navigation";

// export default function JobPage({ params }) {
//   const job = jobsStore.find((j) => j.slug === params.slug);

//   if (!job) return notFound();

//   return (
//     <main className="p-10 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold">{job.title}</h1>

//       <div className="mt-4 space-y-2">
//         <p><b>Department:</b> {job.department}</p>
//         <p><b>Location:</b> {job.location}</p>
//         <p><b>Age:</b> {job.age}</p>
//         <p><b>Last Date:</b> {job.lastDate}</p>
//       </div>

//       <p className="mt-6">{job.description}</p>
//     </main>
//   );
// }


// yeha se start hua post

// import { jobs } from "@/data/jobs";
// import { notFound } from "next/navigation";

// export function generateMetadata({ params }) {
//   const job = jobs.find(j => j.slug === params.slug);
//   if (!job) return {};

//   return {
//     title: `${job.title} Apply Online, Last Date, Eligibility`,
//     description: `${job.title} recruitment details, eligibility, age limit, salary, important dates and official notification PDF.`,
//   };
// }

// export default function JobPage({ params }) {
//   const job = jobs.find(j => j.slug === params.slug);
//   if (!job) return notFound();

//   return (
//     <main className="max-w-5xl mx-auto p-6 md:p-10">

//       {/* ⭐ HERO SECTION */}
//       <div className="bg-white border rounded-xl p-6 shadow">
//         <h1 className="text-3xl font-bold">{job.title}</h1>

//         <p className="mt-2 text-gray-600">{job.department}</p>

//         <div className="flex flex-wrap gap-3 mt-4 text-sm">
//           <span className="bg-green-100 text-green-800 px-3 py-1 rounded">
//             🟢 Vacancy Open
//           </span>
//           <span className="bg-gray-100 px-3 py-1 rounded">
//             📍 {job.location}
//           </span>
//           <span className="bg-gray-100 px-3 py-1 rounded">
//             📅 Last Date: {job.lastDate}
//           </span>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-wrap gap-3 mt-6">
//           <button className="bg-black text-white px-5 py-3 rounded">
//             Apply Online
//           </button>
//           <button className="border px-5 py-3 rounded">
//             Download Notification
//           </button>
//         </div>
//       </div>

//       {/* ⭐ QUICK INFO TABLE */}
//       <section className="mt-10 bg-white border rounded-xl p-6 shadow">
//         <h2 className="text-xl font-semibold mb-4">Job Overview</h2>

//         <div className="grid md:grid-cols-2 gap-4 text-sm">
//           <p><b>Organization:</b> {job.department}</p>
//           <p><b>Post Name:</b> {job.title}</p>
//           <p><b>Job Location:</b> {job.location}</p>
//           <p><b>Age Limit:</b> {job.age}</p>
//           <p><b>Last Date:</b> {job.lastDate}</p>
//           <p><b>Application Mode:</b> Online</p>
//         </div>
//       </section>

//       {/* ⭐ IMPORTANT DATES */}
//       <section className="mt-10 bg-white border rounded-xl p-6 shadow">
//         <h2 className="text-xl font-semibold mb-4">Important Dates</h2>

//         <ul className="space-y-2">
//           <li>📅 Application Start: To Be Announced</li>
//           <li>📅 Last Date: {job.lastDate}</li>
//           <li>📅 Exam Date: Will Update Soon</li>
//           <li>📅 Admit Card: Before Exam</li>
//         </ul>
//       </section>

//       {/* ⭐ ELIGIBILITY */}
//       <section className="mt-10 bg-white border rounded-xl p-6 shadow">
//         <h2 className="text-xl font-semibold mb-4">Eligibility Criteria</h2>

//         <ul className="list-disc ml-5 space-y-2">
//           <li>Candidate must be citizen of India</li>
//           <li>Required educational qualification as per post</li>
//           <li>Age should be within the prescribed limit</li>
//           <li>Additional certification may be required</li>
//         </ul>
//       </section>

//       {/* ⭐ JOB DESCRIPTION */}
//       <section className="mt-10 bg-white border rounded-xl p-6 shadow">
//         <h2 className="text-xl font-semibold mb-4">Job Details</h2>

//         <p className="leading-7 text-gray-700">
//           {job.description}
//         </p>

//         <p className="leading-7 mt-4 text-gray-700">
//           Candidates are advised to read the full notification carefully before
//           applying online. Ensure that eligibility, age limit, and documents
//           are valid before submission.
//         </p>
//       </section>

//       {/* ⭐ HOW TO APPLY */}
//       <section className="mt-10 bg-white border rounded-xl p-6 shadow">
//         <h2 className="text-xl font-semibold mb-4">How to Apply</h2>

//         <ol className="list-decimal ml-5 space-y-2">
//           <li>Visit official website</li>
//           <li>Open recruitment section</li>
//           <li>Fill application form</li>
//           <li>Upload required documents</li>
//           <li>Submit and print form</li>
//         </ol>
//       </section>

//       {/* ⭐ FAQ SECTION (SEO BOOST) */}
//       <section className="mt-10 bg-white border rounded-xl p-6 shadow">
//         <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>

//         <div className="space-y-4">
//           <div>
//             <p className="font-semibold">When is the last date to apply?</p>
//             <p className="text-gray-600">The last date is {job.lastDate}.</p>
//           </div>

//           <div>
//             <p className="font-semibold">Who can apply for this job?</p>
//             <p className="text-gray-600">
//               Candidates meeting eligibility criteria mentioned above can apply.
//             </p>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }
import { notFound } from "next/navigation";

/* ===========================
   FETCH JOB FROM DJANGO API
=========================== */
async function getJob(slug) {
  try {
    const res = await fetch(`http://127.0.0.1:8000/posts/${slug}/`, {
      cache: "no-store",
    });

    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error("JOB FETCH ERROR:", err);
    return null;
  }
}

/* ===========================
   SEO METADATA
=========================== */
export async function generateMetadata({ params }) {
  const job = await getJob(params.slug);
  if (!job) return {};

  return {
    title: `${job.title} Apply Online, Last Date, Eligibility`,
    description: `${job.title} recruitment details including eligibility, age limit, selection process, last date and official notification PDF.`,
  };
}

/* ===========================
   PAGE
=========================== */
export default async function JobPage({ params }) {
  const job = await getJob(params.slug);
  if (!job) return notFound();

  return (
    <main className="max-w-5xl mx-auto p-5 md:p-10 space-y-8">

      {/* ===========================
          HERO SECTION
      =========================== */}
      <section className="bg-white border rounded-xl p-6 shadow">

        <h1 className="text-2xl md:text-3xl font-bold leading-snug">
          {job.title}
        </h1>

        {job.department && (
          <p className="text-gray-600 mt-1">{job.department}</p>
        )}

        {/* STATUS + INFO BADGES */}
        <div className="flex flex-wrap gap-2 mt-4 text-sm">

          {job.status === "closed" ? (
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded">
              🔴 Closed
            </span>
          ) : (
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded">
              🟢 Open
            </span>
          )}

          {job.post_type && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
              {job.post_type}
            </span>
          )}

          {job.location && (
            <span className="bg-gray-100 px-3 py-1 rounded">
              📍 {job.location}
            </span>
          )}

          {job.last_date && (
            <span className="bg-gray-100 px-3 py-1 rounded">
              📅 Last Date: {job.last_date}
            </span>
          )}
        </div>

        {/* POSTED + UPDATED */}
        <p className="text-xs text-gray-500 mt-3">
          Posted: {job.created_at} • Updated: {job.updated_at}
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap gap-3 mt-6">

          {job.apply_link && (
            <a
              href={job.apply_link}
              target="_blank"
              className="bg-black text-white px-5 py-3 rounded"
            >
              Apply Online
            </a>
          )}

          {job.notification_pdf && (
            <a
              href={`/pdf-viewer?file=${encodeURIComponent(job.notification_pdf)}`}
              target="_blank"
              className="border px-5 py-3 rounded"
            >
              View Notification
            </a>
          )}

        </div>
      </section>

      {/* ===========================
          QUICK INFO TABLE
      =========================== */}
      <section className="bg-white border rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold mb-4">
          Job Overview
        </h2>

        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <p><b>Organization:</b> {job.department || "N/A"}</p>
          <p><b>Post Name:</b> {job.title}</p>
          <p><b>Total Posts:</b> {job.total_posts || "N/A"}</p>
          <p><b>Location:</b> {job.location || "India"}</p>
          <p><b>Age Limit:</b> {job.age_limit || "As per rules"}</p>
          <p><b>Application Mode:</b> Online</p>
        </div>
      </section>

      {/* ===========================
          IMPORTANT DATES
      =========================== */}
      <section className="bg-white border rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold mb-4">
          Important Dates
        </h2>

        <ul className="space-y-2 text-sm">
          <li>📅 Posted Date: {job.created_at}</li>
          <li>📅 Last Date: {job.last_date || "Will update"}</li>
          {job.exam_date && <li>📅 Exam Date: {job.exam_date}</li>}
          {job.result_date && <li>📅 Result Date: {job.result_date}</li>}
          {job.admit_card_date && <li>📅 Admit Card: {job.admit_card_date}</li>}
        </ul>
      </section>

      {/* ===========================
          ELIGIBILITY
      =========================== */}
      <section className="bg-white border rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold mb-4">
          Eligibility Criteria
        </h2>

        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>Must be citizen of India</li>
          <li>Education: {job.education?.join(", ") || "See notification"}</li>
          <li>Age limit: {job.age_limit || "As per rules"}</li>
        </ul>
      </section>

      {/* ===========================
          FULL DESCRIPTION
      =========================== */}
      {job.full_desc && (
        <section className="bg-white border rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold mb-4">
            Job Details
          </h2>

          <p className="leading-7 text-gray-700 whitespace-pre-line">
            {job.full_desc}
          </p>
        </section>
      )}

      {/* ===========================
          DYNAMIC TABLE SECTIONS
      =========================== */}
      {job.sections?.map(section => (
        <section
          key={section.id}
          className="bg-white border rounded-xl p-6 shadow"
        >
          <h2 className="text-lg font-semibold mb-4">
            {section.title}
          </h2>

          {section.tables?.map(table => (
            <div key={table.id} className="overflow-x-auto mb-6">

              {table.title && (
                <h3 className="font-semibold mb-2">{table.title}</h3>
              )}

              <table className="w-full border text-sm">
                <tbody>
                  {table.rows.map((row, rIndex) => (
                  <tr key={rIndex} className="border-b">
                  {row.map((cell, cIndex) => (
                  <td key={cIndex} className="p-2 border">
                  {cell}
                  </td>
                  ))}
                  </tr>
                  ))}
                </tbody>
              </table>

            </div>
          ))}
        </section>
      ))}

      {/* ===========================
          FAQ (SEO BOOST)
      =========================== */}
      <section className="bg-white border rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold">
              What is the last date to apply?
            </p>
            <p className="text-gray-600">
              Last date is {job.last_date || "Not announced yet"}.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Who can apply?
            </p>
            <p className="text-gray-600">
              Candidates meeting eligibility criteria can apply.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}