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

    result.push({
      loc: "/features",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });

    result.push({
      loc: "/blog",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });

    result.push({
      loc: "/blog/quizlet-vs-magoosh-vs-vocablet-best-vocabulary-learning-tools-compared",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });

    result.push({
      loc: "/blog/top-10-tips-to-learn-vocabulary-very-fast",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });

    result.push({
      loc: "/blog/how-to-roleplay-as-different-characters-and-learn-vocabulary",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });

    result.push({
      loc: "/auth/login",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });

    result.push({
      loc: "/auth/signup",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });

    return result;
  },
};
