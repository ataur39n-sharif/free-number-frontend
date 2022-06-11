import { parsePhoneNumber } from "libphonenumber-js"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import NoNumberList from "../../Components/Homepage/NumberList/NoNumberList"
import { countryList } from "../../utils/countries/countries"

const IndividualCountryNumList = ({ data }) => {
    const [allData, setAllData] = useState([])
    const router = useRouter()
    const { country_code } = router.query

    const list = Object.entries(countryList)
    if (data.status === 'success') {
        const numList = Object.entries(data.values)
        numList.map(each => {
            const phoneNumber = parsePhoneNumber(`+${each[1].phone}`)
            const data = list.find(each => each[0] === phoneNumber.country.toLowerCase())
            if (data) {
                const tempSchema = {
                    country_name: data[1].name,
                    country_code: phoneNumber.country,
                    phone_number: phoneNumber.number,
                    number_id: each[1].id,
                    country_calling_code: `+${phoneNumber.countryCallingCode}`,
                    img: `/images/${phoneNumber.country.toLowerCase()}.png`,
                }
                const alreadyListed = allData.find(each => each?.phone_number === tempSchema.phone_number)
                if (!alreadyListed) {
                    const previous = [...allData]
                    previous.push(tempSchema)
                    setAllData(previous)
                }
            }
        })
    }

    const currentData = allData.filter(each => {
        return each.country_code.toLowerCase() === country_code.toLowerCase()
    })

    return (
        <div className="container">
            <Row lg={4} md={2} sm={1}>
                {
                    currentData.length ?
                        currentData.map((each, i) => {
                            return (
                                <Col style={{ minWidth: '18rem' }} className="m-auto mt-4" key={i}>
                                    <Card className="text-center">
                                        <Card.Img className="p-3" id="country_flag" src={each?.img} alt="Country_Flag" />
                                        <Card.Body>
                                            <Card.Title id="phone_no">{each?.phone_number}</Card.Title>
                                            <Card.Text id="country_name" className="text-secondary">
                                                {each?.country_name}
                                            </Card.Text>
                                            <Link href={`/number/${each?.number_id}`}>
                                                <Button variant="outline-primary">
                                                    Receive SMS Online
                                                </Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }) : <NoNumberList />
                }
            </Row>
        </div>
    )
}

export default IndividualCountryNumList

export async function getServerSideProps() {
    const result = await fetch(`${process.env.CURRENT_SITE_LINK}/api/getRentNumberList`)
    const value = await result.json()

    return {
        props: {
            data: value || null
        }
    }
}