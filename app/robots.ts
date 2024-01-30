export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: "https://datafish.vercel.app/sitemap.xml",
    host: "https://datafish.vercel.app",
  };
}
