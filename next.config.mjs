/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Open Source was folded into Projects
    return [{ source: "/open-source", destination: "/projects", permanent: true }];
  },
};

export default nextConfig;
