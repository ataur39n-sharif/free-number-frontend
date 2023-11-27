import { parsePhoneNumber } from "libphonenumber-js"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import NumberListBlog from "../../Components/Blogs/NumberList"
import NoNumberList from "../../Components/Homepage/NumberList/NoNumberList"
import { countryList } from "../../utils/countries/countries"

const IndividualCountryNumList = ({ pageData, blogData, numList }) => {

    const [numberList, setNumberList] = useState([])
    const [countryInfo, setCountryInfo] = useState({})
    const [blogAddCount, setBlogAddCount] = useState(0)

    const router = useRouter()
    const { country_slug } = router.query

    //slug
    useEffect(() => {

        //number list
        let selectCountryNumberList = []
        numList.map((each) => {
            if (each.status === 'active' && each.country_slug === country_slug) {
                selectCountryNumberList.push(each)
            }
        })
        setNumberList(selectCountryNumberList)

        //country info
        const list = Object.entries(countryList)
        const currentCountry = list.find((each) => each[1].slug.toLowerCase() === country_slug.toLowerCase())
        setCountryInfo({
            country_name: currentCountry ? currentCountry[1]?.name : country_slug,
            country_slug: currentCountry ? currentCountry[1]?.slug : country_slug,
            flag: `/images/${currentCountry ? currentCountry[0]?.toLowerCase() : country_slug}.png`
        })

        //blog code
        if (blogAddCount === 0) {
            //for title 
            const blogTitleDiv = document.createElement('div')
            const blogTitle = blogData && blogData?.title?.split('country_name').join(currentCountry && currentCountry[1].name.toUpperCase())
            blogTitleDiv.innerHTML = blogTitle

            const mainTitleDiv = document.getElementById('title')
            mainTitleDiv.appendChild(blogTitleDiv)

            //for discription

            const blogDescriptionDiv = document.createElement('div')
            const blogDescription = blogData && blogData?.description?.split('country_name').join(currentCountry && currentCountry[1].name.toUpperCase())
            blogDescriptionDiv.innerHTML = blogDescription

            const mainDescriptionDiv = document.getElementById('description')
            mainDescriptionDiv.appendChild(blogDescriptionDiv)

            setBlogAddCount(blogAddCount++)
        }
    }, [])

    //selected countries number list 
    const handleMove = (code) => {
        window.location.replace(`/countries/${code}`)
    }

    return (
        <>
            <Head>
                <title>{pageData ? pageData?.title?.split('country_name').join(countryInfo?.country_name) : "Demo Title"}</title>
                <meta name="description" content={pageData ? pageData?.meta_description?.split('country_name').join(countryInfo?.country_name) : "Demo description"} />
                <meta name="keywords" content={pageData ? pageData?.keyword?.split('country_name').join(countryInfo?.country_name) : "keywords list"} />
            </Head>
            <div className="m-5">
                <div>
                    <div className="numberInfo m-3  text-center">
                        <h1 style={{ 'cursor': 'pointer' }} onClick={() => handleMove(country_slug.toLowerCase())}>
                            <img src={countryInfo?.flag} alt="country_flag" height="35" className="m-2" />
                            <p><strong>{`${countryInfo?.country_name} Phone Number`}</strong></p>
                        </h1>
                    </div>
                </div>
                {
                    numberList?.length > 0 &&
                    <>
                        <Row className="container m-auto">
                            {
                                numberList?.map((each, i) => {
                                    return (
                                        <Col lg={4} md={6} sm={12} style={{ minWidth: '15rem' }} className="m-auto mt-5" key={i}>
                                            <a href={`/free-${countryInfo?.country_slug}-number/${each?.phone_number}`}>
                                                <Card
                                                    id="card_section"
                                                    className="text-center"
                                                    style={{ height: "30vh" }}
                                                >
                                                    <Card.Img className="p-3" id="country_flag" src={countryInfo?.flag} style={{ minHeight: "17vh", minWidth: "30px" }} alt="Country_Flag" />
                                                    <Card.Body>
                                                        <Card.Title id="phone_no">+{each?.phone_number}</Card.Title>
                                                        <Card.Text id="country_name" className="text-secondary">
                                                            {each?.country_name}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </a>

                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </>
                }

                {
                    numberList?.length <= 0 && <NoNumberList />
                }
                <div className=" m-5">
                    <div className="text-center" id="title">

                    </div>
                    <div id="description">

                    </div>
                </div>
            </div >
        </>
    )
}

export default IndividualCountryNumList

export async function getServerSideProps(context) {
    const result = await fetch('https://real-jade-chimpanzee-vest.cyclic.app/number/list')
    const value = await result.json()

    const pageDataReq = await fetch('https://real-jade-chimpanzee-vest.cyclic.app/page/single_country_page')
    const pageData = await pageDataReq.json()

    const blogReq = await fetch('https://real-jade-chimpanzee-vest.cyclic.app/blog/country_page')
    const blogData = await blogReq.json()

    return {
        props: {
            numList: value.success ? value?.list : [],
            pageData: pageData.success ? pageData.data : null,
            blogData: blogData.success ? blogData.blog : null
        }
    }
}