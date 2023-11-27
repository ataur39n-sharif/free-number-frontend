import { getServerSideSitemap } from 'next-sitemap'

export async function getServerSideProps(context) {
    const res = await fetch('https://api.receivesmsonline.io/number/list')
    const response = await res.json()

    let country_slugs = ["australia",
        "canada",
        "czech-republic",
        "denmark",
        "mexico",
        "netherlands",
        "romania",
        "sweden",
        "united-states",
    ]

    // const list = Object.entries(countryList)
    // list.map((each) => country_slugs.push(each[1].slug))

    let fields = []
    response?.list?.map((eachData) => (
        fields.push({
            loc: `https://receivesmsonline.io/free-${eachData?.country_slug}-number/${eachData?.phone_number}`,
            lastmod: new Date().toISOString(),
            priority: "0.7",
            changefreq: "daily",
        })
    ))

    country_slugs?.map((slug) => (
        fields.push({
            loc: `https://receivesmsonline.io/countries/${slug}`,
            lastmod: new Date().toISOString(),
            priority: "0.7",
            changefreq: "daily",
        })
    ))

    return getServerSideSitemap(context, fields)
}

export default function Sitemap() { }