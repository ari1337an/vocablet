/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vocablet.io",
  generateRobotsTxt: true, // (optional)
  exclude: ["/subscription/cancel", "/subscription/success"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  additionalPaths: async (config) => {
    const result = [];

    // all possible values
    result.push({
      loc: "/pricing",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });

    return result;
  },
};
