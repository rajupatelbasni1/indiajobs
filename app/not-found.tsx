import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gray-50">
      <div className="text-center max-w-xl">

        <h1 className="text-6xl font-bold text-gray-800">404</h1>

        <h2 className="text-2xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-3">
          The page you are looking for might have been removed,
          had its name changed, or is temporarily unavailable.
        </p>

        <div className="mt-6 flex justify-center gap-4">

          <Link
            href="/"
            className="bg-black text-white px-6 py-3 rounded hover:opacity-90"
          >
            Go to Homepage
          </Link>

          <Link
            href="/jobs"
            className="border px-6 py-3 rounded hover:bg-gray-100"
          >
            Browse Jobs
          </Link>

        </div>

      </div>
    </main>
  );
}