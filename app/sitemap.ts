import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl = "https://indiajobs.rajuptelbasnijutha.workers.dev";

  // STATIC PAGES
  const staticPages = [
    "",
    "/jobs",
    "/jobs/govt",
    "/jobs/private",
    "/jobs/upcoming"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));


  // FETCH JOBS FROM BACKEND
  let jobs: any[] = [];
  try {
    const res = await fetch("https://indiajobs-2.onrender.com/posts/", {
      cache: "no-store",
    });
    jobs = await res.json();
  } catch (e) {
    console.log("sitemap fetch error");
  }

  const jobPages = jobs.map((job) => ({
    url: `${baseUrl}/jobs/${job.slug}`,
    lastModified: new Date(job.updated_at || job.created_at),
  }));


  return [...staticPages, ...jobPages];
}
