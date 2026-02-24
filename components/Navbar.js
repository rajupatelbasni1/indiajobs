// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const path = usePathname();

//   const navItem = (href, label) => (
//     <Link
//       href={href}
//       className={`px-4 py-2 rounded-lg transition ${
//         path === href
//           ? "bg-white text-black font-semibold"
//           : "text-white hover:bg-gray-800"
//       }`}
//     >
//       {label}
//     </Link>
//   );

//   return (
//     <nav className="bg-black text-white sticky top-0 z-50 shadow">
//       <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

//         {/* Logo */}
//         <Link href="/" className="text-xl font-bold">
//           IndiaJobs
//         </Link>

//         {/* Menu */}
//         <div className="hidden md:flex gap-2">
//           {navItem("/", "Home")}
//           {navItem("/jobs", "Latest Jobs")}
//           {navItem("/jobs/govt", "Govt Vacancy")}
//           {navItem("/jobs/private", "Private Vacancy")}
//           {navItem("/jobs/upcoming", "Upcoming Jobs")}
//         </div>

//         {/* Mobile text */}
//         <div className="md:hidden text-sm">
//           Menu
//         </div>

//       </div>
//     </nav>
//   );
// }
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const navItem = (href, label) => (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className={`block px-4 py-2 rounded-lg transition ${
        path === href
          ? "bg-white text-black font-semibold"
          : "text-white hover:bg-gray-800"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          IndiaJobs
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-2">
          {navItem("/", "Home")}
          {navItem("/jobs/result", "Result")}
          {navItem("/jobs/admit-card", "Admit Card")}
          {navItem("/jobs", "Latest Jobs")}
          {navItem("/jobs/govt", "Govt Vacancy")}
          {navItem("/jobs/private", "Private Vacancy")}
          {navItem("/jobs/upcoming", "Upcoming Jobs")}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden px-3 py-2 border rounded"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black">
          {navItem("/", "Home")}
          {navItem("/jobs/result", "Result")}
          {navItem("/jobs/admit-card", "Admit Card")}
          {navItem("/jobs", "Latest Jobs")}
          {navItem("/jobs/govt", "Govt Vacancy")}
          {navItem("/jobs/private", "Private Vacancy")}
          {navItem("/jobs/upcoming", "Upcoming Jobs")}
        </div>
      )}
    </nav>
  );
}
