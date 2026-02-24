// "use client";

// import { useSearchParams } from "next/navigation";

// export default function PdfViewerPage() {
//   const params = useSearchParams();
//   const file = params.get("file");

//   if (!file) {
//     return <div className="p-10">No PDF provided</div>;
//   }

//   return (
//     <main className="max-w-6xl mx-auto p-4 md:p-6">

//       {/* TITLE */}
//       <h1 className="text-xl md:text-2xl font-bold mb-4">
//         Notification Preview
//       </h1>

//       {/* ACTION BAR */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         <a
//           href={file}
//           target="_blank"
//           className="bg-black text-white px-4 py-2 rounded text-sm md:text-base"
//         >
//           Download PDF
//         </a>

//         <a
//           href={file}
//           target="_blank"
//           className="border px-4 py-2 rounded text-sm md:text-base"
//         >
//           Open Fullscreen
//         </a>
//       </div>

//       {/* PDF CONTAINER */}
//       <div className="bg-white border rounded shadow overflow-hidden">

//         {/* TOP AD SLOT */}
//         <div className="text-center py-2 text-xs text-gray-400 border-b">
//           Ad Space (Top)
//         </div>

//         {/* MOBILE OPTIMIZED VIEWER */}
//         <div className="w-full">

//           <iframe
//             src={file}
//             className="w-full border-0"
//             style={{
//               height: "calc(100vh - 180px)",   // auto height mobile friendly
//               minHeight: "600px"
//             }}
//           />

//         </div>

//         {/* BOTTOM AD SLOT */}
//         <div className="text-center py-2 text-xs text-gray-400 border-t">
//           Ad Space (Bottom)
//         </div>

//       </div>

//     </main>
//   );
// }

"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function PdfViewerPage() {
  const params = useSearchParams();
  const file = params.get("file");

  useEffect(() => {
    // detect mobile
    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      );

    // 📱 mobile → open native viewer
    if (isMobile && file) {
      window.location.href = file;
    }
  }, [file]);

  if (!file) {
    return <div className="p-10">No PDF provided</div>;
  }

  return (
    <main className="max-w-6xl mx-auto p-4 md:p-6">

      <h1 className="text-xl md:text-2xl font-bold mb-4">
        Notification Preview
      </h1>

      {/* ACTION BAR */}
      <div className="flex gap-2 mb-4">
        <a
          href={file}
          target="_blank"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Download PDF
        </a>

        <a
          href={file}
          target="_blank"
          className="border px-4 py-2 rounded"
        >
          Open Fullscreen
        </a>
      </div>

      {/* DESKTOP VIEWER */}
      <div className="hidden md:block bg-white border rounded shadow overflow-hidden">

        <div className="text-center py-2 text-xs text-gray-400 border-b">
          Ad Space (Top)
        </div>

        <iframe
          src={file}
          className="w-full border-0"
          style={{ height: "85vh" }}
        />

        <div className="text-center py-2 text-xs text-gray-400 border-t">
          Ad Space (Bottom)
        </div>

      </div>

      {/* MOBILE MESSAGE */}
      <div className="md:hidden text-center p-6 bg-white border rounded shadow">
        Opening PDF in mobile viewer...
      </div>

    </main>
  );
}