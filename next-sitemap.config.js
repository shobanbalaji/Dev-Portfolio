/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://shoban-dev.web.app/", 
  generateRobotsTxt: true, // Generate robots.txt automatically
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/api/*", "/server-sitemap-index.xml"], // Optional
};
