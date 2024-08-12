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
      {
        userAgent: "Googlebot",
        disallow: ""
      },
      {
        userAgent: "AdsBot-Google",
        disallow: ""
      },
      {
        userAgent: "Googlebot-Image",
        disallow: ""
      }
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
