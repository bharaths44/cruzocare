import fs from 'fs';

const sections = [
    '',
    '#services',
    '#plans',
    '#contact',
    '#about',
];

const baseUrl = 'https://cruzocare.co.in';

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sections.map(section => `
    <url>
      <loc>${baseUrl}/${section}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemapContent);
console.log('✅ Sitemap generated successfully!');
