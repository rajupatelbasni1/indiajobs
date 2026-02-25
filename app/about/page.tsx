export const metadata = {
  title: "About Us - IndiaJobs",
  description: "About IndiaJobs website",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <p className="mb-4">
        IndiaJobs is a job information platform that provides latest
        government jobs, private jobs, admit cards, results, answer keys
        and notifications in one place.
      </p>

      <p className="mb-4">
        Our goal is to provide fast and accurate job updates to students
        and job seekers across India.
      </p>

      <p>
        We are not a government website. We collect job information from
        official sources and provide it in simple format for users.
      </p>
    </main>
  );
}