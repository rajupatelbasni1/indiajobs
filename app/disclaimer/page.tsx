export const metadata = {
  title: "Disclaimer - IndiaJobs",
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>

      <p className="mb-4">
        IndiaJobs is not a government website and is not affiliated
        with any government organization.
      </p>

      <p className="mb-4">
        We collect job information from official websites,
        newspapers and employment portals and provide it
        for informational purposes only.
      </p>

      <p>
        Users should always verify details from the official
        website before applying for any job.
      </p>
    </main>
  );
}