import { parsePhoneNumber } from "libphonenumber-js"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import NumberListBlog from "../../Components/Blogs/NumberList"
import NoNumberList from "../../Components/Homepage/NumberList/NoNumberList"
import { countryList } from "../../utils/countries/countries"

const IndividualCountryNumList = ({ data, pageData ,blogData}) => {
    const [allData, setAllData] = useState([])
    const [currentData, setCurrentData] = useState([])
    const [countryInfo, setCountryInfo] = useState({})
    const router = useRouter()
    const { country_code } = router.query

    console.log(pageData);

    useEffect(() => {
        const list = Object.entries(countryList)
        if (data.items.length) {
            const numList = Object.entries(data.items)
            //console.log(numList);
            numList.map(each => {
                const phoneNumber = parsePhoneNumber(`+${each[1].number}`)
                const data = list.find(each => each[0] === phoneNumber.country.toLowerCase())
                if (data) {
                    const tempSchema = {
                        country_name: data[1].name,
                        country_code: phoneNumber.country,
                        phone_number: phoneNumber.number,
                        number_id: each[1].number,
                        country_calling_code: `+${phoneNumber.countryCallingCode}`,
                        img: `/images/${phoneNumber.country.toLowerCase()}.png`,
                    }
                    //console.log(tempSchema);
                    const alreadyListed = allData.find(each => each?.phone_number === tempSchema.phone_number)
                    if (!alreadyListed) {
                        const previous = [...allData]
                        previous.push(tempSchema)

                        const currData = previous.filter(each => {
                            return each.country_code.toLowerCase() === country_code.toLowerCase()
                        })
                        setCurrentData(currData)

                        setAllData(previous)
                    }
                }
            })
        }
    }, [allData])

    useEffect(() => {
        const list = Object.entries(countryList)
        const data = list.find(each => each[0] === country_code)
        const tempData = {
            country_name: data[1].name,
            flag: `/images/${country_code.toLowerCase()}.png`,
        }
        setCountryInfo(tempData)
    }, [])

    //selected countries number list 
    const handleMove = (code) => {
        window.location.replace(`/number-list/${code}`)
    }
    //update message
    const loadAgain = () => {
        window.location.reload(false)
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
                        <h1 style={{ 'cursor': 'pointer' }} onClick={() => handleMove(country_code.toLowerCase())}>
                            <img src={countryInfo?.flag} alt="country_flag" height="35" className="m-2" />
                            <p><strong>{`${countryInfo?.country_name} Phone Number`}</strong></p>
                        </h1>
                        {/* <Button className="m-5" variant="outline-primary" onClick={() => loadAgain()}> <AiOutlineReload /> Update List</Button> */}
                    </div>
                </div>
                {
                    currentData?.length > 0 &&
                    <>
                        <Row className="container m-auto">
                            {
                                currentData?.map((each, i) => {
                                    //console.log(each);
                                    return (
                                        <Col lg={4} md={6} sm={12} style={{ minWidth: '15rem' }} className="m-auto mt-5" key={i}>
                                            <a href={`/number/${each?.number_id}`}>
                                                <Card
                                                    id="card_section"
                                                    className="text-center"
                                                    style={{ height: "30vh" }}
                                                >
                                                    <Card.Img className="p-3" id="country_flag" src={each?.img} style={{ minHeight: "17vh", minWidth: "30px" }} alt="Country_Flag" />
                                                    <Card.Body>
                                                        <Card.Title id="phone_no">{each?.phone_number}</Card.Title>
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
                        <NumberListBlog country_code={country_code} blogData={blogData} />
                    </>
                }

                {
                    currentData?.length <= 0 &&
                    <NoNumberList country_code={country_code} />
                }
            </div >
        </>
    )
}

export default IndividualCountryNumList

export async function getServerSideProps(context) {
    const result = await fetch(`https://numbers.messagebird.com/v1/phone-numbers?country=${context.query.country_code}`, {
        method: "get",
        headers: {
            'Authorization': 'AccessKey XM7Qv4P6xzebLjyNueNHahiu0'
        }
    })
    const value = await result.json()

    const pageDataReq = await fetch('https://api.receivesmsonline.io/page/single_country_page')
    const pageData = await pageDataReq.json()

    const blogReq = await fetch('http://localhost:5000/blog/country_page')
    const blogData = await blogReq.json()

    return {
        props: {
            data: value || null,
            pageData: pageData.success ? pageData.data : null,
            blogData: blogData.success ? blogData.blog : null
        }
    }
}