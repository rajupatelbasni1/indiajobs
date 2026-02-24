// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: "/media/:path*",
//         destination: "http://127.0.0.1:8000/media/:path*",
//       },
//     ];
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/media/:path*",
        destination: "https://indiajobs-2.onrender.com/media/:path*",
      },
      {
        source: "/posts/:path*",
        destination: "https://indiajobs-2.onrender.com/posts/:path*",
      },
    ];
  },
};

export default nextConfig;
