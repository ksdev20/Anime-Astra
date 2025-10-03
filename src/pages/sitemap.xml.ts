export const prerender = true;

export async function GET() {
  const urls: string[] = [
    "https://animeastra.vercel.app/",
    "https://animeastra.vercel.app/top-5-overlooked-action-adventure-anime",
    "https://animeastra.vercel.app/top-5-anime-with-mind-games-that-rival-death-note",
    "https://animeastra.vercel.app/creator/Kiseki",
    "https://animeastra.vercel.app/all-articles/",
    "https://animeastra.vercel.app/legal/about",
  ];

  const finalUrls = urls
    .map(
      (i) =>
        `  <url>
    <loc>${i}</loc>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${finalUrls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=UTF-8",
      "Cache-Control": "no-cache",
    },
  });
}
