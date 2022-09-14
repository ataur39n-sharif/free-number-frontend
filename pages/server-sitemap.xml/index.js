import { getServerSideSitemap } from 'next-sitemap'

export async function getServerSideProps(context) {
    const res = await fetch('http://localhost:8080/number/list')
    const response = await res.json()

    let countryCode = []
    response?.list?.map((eachData) => {
        const listed = countryCode.find((code) => code === eachData.country_code)
        if (!listed) {
            countryCode.push(eachData.country_code)
        }
    })

    let fields = []
    response?.list?.map((eachData) => (
        fields.push({
            loc: `https://receivesmsonline.io/free-${eachData?.country_slug}-number/${eachData?.phone_number}`,
            lastmod: new Date().toISOString()
        })
    ))

    countryCode?.map((eachCode) => (
        fields.push({
            loc: `https://receivesmsonline.io/number-list/${eachCode}`,
            lastmod: new Date().toISOString()
        })
    ))

    return getServerSideSitemap(context, fields)
}

export default function Sitemap() { }