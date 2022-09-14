const siteUrl = "https://receivesmsonline.io"

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    exclude: ['/asik'],
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", disallow: "/asik/*" },
            { userAgent: "*", disallow: "/asik/*" }
        ]
    },
    additionalSitemaps:[
        'https://receivesmsonline.io/server-sitemap.xml',
        'https://receivesmsonline.io/sitemap.xml'
    ]
}