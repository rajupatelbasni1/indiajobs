// "use client";

// import { useState } from "react";
// import { addJob } from "@/data/store";
// import { useRouter } from "next/navigation";

// export default function AdminPage() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     title: "",
//     department: "",
//     location: "",
//     age: "",
//     lastDate: "",
//     description: ""
//   });

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     const slug = form.title
//       .toLowerCase()
//       .replaceAll(" ", "-")
//       .replace(/[^\w-]+/g, "");

//     addJob({ ...form, slug, id: Date.now() });

//     alert("Job Added Successfully!");
//     router.push("/jobs");
//   }

//   return (
//     <main className="p-10 max-w-xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">Add New Vacancy</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input name="title" placeholder="Job Title"
//           onChange={handleChange} className="w-full border p-3"/>

//         <input name="department" placeholder="Department"
//           onChange={handleChange} className="w-full border p-3"/>

//         <input name="location" placeholder="Location"
//           onChange={handleChange} className="w-full border p-3"/>

//         <input name="age" placeholder="Age Limit"
//           onChange={handleChange} className="w-full border p-3"/>

//         <input name="lastDate" placeholder="Last Date"
//           onChange={handleChange} className="w-full border p-3"/>

//         <textarea name="description" placeholder="Description"
//           onChange={handleChange} className="w-full border p-3"/>

//         <button className="bg-black text-white px-6 py-3 rounded">
//           Upload Job
//         </button>
//       </form>
//     </main>
//   );
// }
