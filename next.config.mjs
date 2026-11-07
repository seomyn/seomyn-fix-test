/** Static export, so any static host (GitHub Pages, Cloudflare Pages, Vercel) can publish the site. */
const nextConfig = {
  output: "export",
  trailingSlash: false,
  images: { unoptimized: true },
};

export default nextConfig;
