import { dev } from '$app/environment'
import { PUBLIC_SITE_URL } from '$env/static/public'
import { getArticles } from '$lib/utils/articles.server'

export async function GET({ url }) {
  const articles = getArticles()

  const baseUrl = dev
    ? `${url.protocol}//${url.host}`
    : PUBLIC_SITE_URL.replace(/\/$/, '')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Articles page -->
  <url>
    <loc>${baseUrl}/articles</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Individual articles -->
  ${articles
    .map(
      (article) => `
  <url>
    <loc>${baseUrl}/articles/${article.slug}</loc>
    <lastmod>${new Date(article.updatedAt || article.publishAt).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      'X-Robots-Tag': 'noindex' // Don't index the sitemap itself
    }
  })
}
