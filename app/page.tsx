/* eslint-disable @typescript-eslint/no-explicit-any */
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="bg-gray-50 min-h-screen">

//       {/* ⭐ HERO */}
//       <section className="bg-black text-white py-16 px-6">
//         <div className="max-w-5xl mx-auto text-center">

//           <h1 className="text-4xl md:text-5xl font-bold">
//             Find Your Dream Job Today
//           </h1>

//           <p className="mt-4 text-gray-300">
//             Latest Vacancies, Results, Admit Cards and Notifications in one place.
//           </p>

//           <div className="mt-8 flex flex-col md:flex-row gap-3 justify-center">
//             <input
//               placeholder="Search jobs, departments, exams..."
//               className="px-5 py-3 rounded-lg bg-white text-black w-full md:w-96 border"
//             />
//             <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
//               Search Jobs
//             </button>
//           </div>
//         </div>
//       </section>

      // {/* ⭐ LIVE TICKER */}
      // <section className="bg-yellow-100 border-y">
      //   <div className="max-w-6xl mx-auto py-3 px-4 flex gap-6 overflow-x-auto whitespace-nowrap text-sm">

      //     <Link href="/jobs" className="font-semibold text-red-600">
      //       🔥 Railway Technician Form 2026 Open
      //     </Link>

      //     <Link href="/jobs" className="font-semibold">
      //       🟢 SSC GD Admit Card Released
      //     </Link>

      //     <Link href="/jobs" className="font-semibold">
      //       📢 BPSC Teacher Answer Key Out
      //     </Link>

      //     <Link href="/jobs" className="font-semibold">
      //       📌 UP Police Bharti Coming Soon
      //     </Link>

      //   </div>
      // </section>
//       <br /><br />
//       {/* ⭐ QUICK NAV BLOCKS */}
//       <section className="max-w-6xl mx-auto px-6 -mt-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

//           <Link href="/jobs" className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg">
//             Latest Vacancy
//           </Link>

//           <Link href="/jobs/govt" className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg">
//             Govt Vacancy
//           </Link>

//           <Link href="/jobs/private" className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg">
//             Private Vacancy
//           </Link>

//           <Link href="/jobs/upcoming" className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg">
//             Upcoming Vacancy
//           </Link>

//         </div>
//       </section>

//       {/* ⭐ RESULTS / ADMIT / ANSWER KEY */}
//       <section className="max-w-6xl mx-auto px-6 mt-14">
//         <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>

//         <div className="grid md:grid-cols-3 gap-6">

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h3 className="font-semibold text-lg mb-3">Results</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#">SSC CGL Result 2026</Link></li>
//               <li><Link href="#">BPSC Teacher Result</Link></li>
//               <li><Link href="#">Railway JE Result</Link></li>
//             </ul>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h3 className="font-semibold text-lg mb-3">Admit Cards</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#">SSC GD Admit Card</Link></li>
//               <li><Link href="#">UP Police Admit Card</Link></li>
//               <li><Link href="#">Bank Clerk Admit Card</Link></li>
//             </ul>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h3 className="font-semibold text-lg mb-3">Answer Keys</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#">BPSC Teacher Answer Key</Link></li>
//               <li><Link href="#">SSC CHSL Answer Key</Link></li>
//               <li><Link href="#">Railway Group D Answer Key</Link></li>
//             </ul>
//           </div>

//         </div>
//       </section>

//       {/* ⭐ LATEST VACANCIES LIST */}
//       <section className="max-w-6xl mx-auto px-6 mt-16">
//         <h2 className="text-2xl font-bold mb-6">Latest Vacancies</h2>

//         <div className="grid md:grid-cols-3 gap-6">

//           {[1,2,3,4,5,6].map((i)=>(
//             <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
//               <h3 className="font-semibold">Sample Job Title {i}</h3>
//               <p className="text-gray-600 text-sm mt-2">Department Name</p>

//               <div className="text-sm mt-3 text-gray-500">
//                 <p>📍 India</p>
//                 <p>📅 Last Date: Soon</p>
//               </div>

//               <Link href="/jobs" className="inline-block mt-4 text-blue-600 font-semibold">
//                 View Details →
//               </Link>
//             </div>
//           ))}

//         </div>
//       </section>

//       {/* ⭐ CATEGORY GRID */}
//       <section className="max-w-6xl mx-auto px-6 mt-16">
//         <h2 className="text-2xl font-bold mb-6">Explore by Category</h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

//           {[
//             "Railway Jobs",
//             "Bank Jobs",
//             "SSC Jobs",
//             "Teaching Jobs",
//             "Police Jobs",
//             "Engineering Jobs",
//             "Defence Jobs",
//             "State Govt Jobs",
//           ].map((cat)=>(
//             <div key={cat} className="bg-white p-5 rounded-lg shadow text-center hover:bg-black hover:text-white transition">
//               {cat}
//             </div>
//           ))}

//         </div>
//       </section>


//       {/* ⭐ WHY CHOOSE US */}
//       <section className="bg-white mt-16 py-14 px-6">
//         <div className="max-w-5xl mx-auto text-center">

//           <h2 className="text-2xl font-bold">Why Choose IndiaJobs?</h2>

//           <div className="grid md:grid-cols-3 gap-6 mt-10">

//             <div>
//               <h3 className="font-semibold">✔ Daily Updates</h3>
//               <p className="text-gray-600 mt-2">
//                 We provide fastest updates on govt & private jobs.
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold">✔ All Jobs in One Place</h3>
//               <p className="text-gray-600 mt-2">
//                 Admit cards, results, forms, notifications everything available.
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold">✔ Easy to Use</h3>
//               <p className="text-gray-600 mt-2">
//                 Simple interface for students and job seekers.
//               </p>
//             </div>

//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }

// FORCE dynamic render (important for fresh jobs)

// export const dynamic = "force-dynamic";

/* ===========================
   FETCH JOBS FROM DJANGO
=========================== */
import SocialIcons from "@/components/SocialIcons";
import HomeSearch from "@/components/HomeSearch";

async function getJobs() {
  try {
    const res = await fetch("https://indiajobs-2.onrender.com/posts/", {
      cache: "no-store",
    });

    if (!res.ok) return [];

    const data = await res.json();

    // newest first + only 6 jobs
    return data
      .sort((a: any, b: any) =>
        new Date(b.created_at).getTime() -
        new Date(a.created_at).getTime()
      )
      .slice(0, 6);

  } catch (err) {
    console.error("API ERROR:", err);
    return [];
  }
}

/* ===========================
   HOME PAGE
=========================== */

export default async function HomePage() {
  const jobs = await getJobs();

  return (
    <main className="max-w-6xl mx-auto p-6 md:p-10">

      {/* HERO */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          Latest Government & Private Jobs
        </h1>

        <p className="text-gray-600 mt-2">
          Find govt jobs, private jobs, admit cards, results and answer keys
        </p>

        {/* SEARCH */}
          <div className="mt-6 flex flex-col md:flex-row gap-3 justify-center">
              <HomeSearch />
          </div>
        
      </section>

      {/* ===========================
          LATEST JOBS
      =========================== */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Latest Jobs</h2>

        {jobs.length === 0 && (
          <p className="text-gray-500">No jobs available yet.</p>
        )}

        <div className="grid md:grid-cols-2 gap-5">

          {jobs.map((job: any) => (
            <a
              key={job.id}
              href={`/jobs/${job.slug}`}
              className="border rounded-xl p-5 bg-white shadow hover:shadow-lg transition"
            >

              {/* TITLE */}
              <h3 className="text-lg font-semibold">
                {job.title}
              </h3>

              {/* DEPARTMENT */}
              {job.department && (
                <p className="text-gray-600 text-sm mt-1">
                  {job.department}
                </p>
              )}

              {/* BADGES */}
              <div className="flex flex-wrap gap-2 mt-3 text-xs">

                {/* STATUS */}
                {job.status === "closed" ? (
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded">
                    🔴 Closed
                  </span>
                ) : (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                    🟢 Open
                  </span>
                )}

                {/* TYPE */}
                {job.post_type && (
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {job.post_type}
                  </span>
                )}

                {/* LAST DATE */}
                {job.last_date && (
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    Last Date: {job.last_date}
                  </span>
                )}
              </div>

              {/* POSTED DATE */}
              {job.created_at && (
                <p className="text-xs text-gray-500 mt-2">
                  Posted: {job.created_at}
                </p>
              )}
            </a>
          ))}

        </div>
      </section>
    </main>
  );
}
