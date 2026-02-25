import { MetadataRoute } from "next";

type Job = {
  slug: string;
  created_at?: string;
  updated_at?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl = "https://indiajobs.co";

  // STATIC PAGES
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/jobs",
    "/jobs/govt",
    "/jobs/private",
    "/jobs/upcoming",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));


  // FETCH JOBS FROM BACKEND
  let jobs: Job[] = [];

  try {
    const res = await fetch("https://indiajobs-2.onrender.com/posts/", {
      cache: "no-store",
    });

    if (res.ok) {
      jobs = await res.json();
    }
  } catch {
    // ignore fetch error silently
  }


  const jobPages: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${baseUrl}/jobs/${job.slug}`,
    lastModified: new Date(job.updated_at || job.created_at || Date.now()),
  }));


  return [...staticPages, ...jobPages];
}
