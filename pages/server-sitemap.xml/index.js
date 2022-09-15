import { getServerSideSitemap } from 'next-sitemap'
import { countryList } from '../../utils/countries/countries'

export async function getServerSideProps(context) {
    const res = await fetch('https://api.receivesmsonline.io/number/list')
    const response = await res.json()

    let country_slugs = []

    const list = Object.entries(countryList)
    list.map((each) => country_slugs.push(each[1].slug))

    let fields = []
    response?.list?.map((eachData) => (
        fields.push({
            loc: `https://receivesmsonline.io/free-${eachData?.country_slug}-number/${eachData?.phone_number}`,
            lastmod: new Date().toISOString()
        })
    ))

    country_slugs?.map((slug) => (
        fields.push({
            loc: `https://receivesmsonline.io/countries/${slug}`,
            lastmod: new Date().toISOString()
        })
    ))

    return getServerSideSitemap(context, fields)
}

export default function Sitemap() { }