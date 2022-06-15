import { useEffect, useState } from "react"
import parsePhoneNumber from 'libphonenumber-js'
import { countryList } from "../utils/countries/countries"
import NumberList from "../Components/Homepage/NumberList"
import NoNumberList from "../Components/Homepage/NumberList/NoNumberList"
import { Button, Card, Col, Row } from "react-bootstrap"
import Link from "next/link"

const AllCountries = ({ data }) => {
    const [allData, setAllData] = useState([])
    const tempValue = {
        "0": {
            "id": "5940197",
            "phone": "79842686684"
        },
        "1": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "2": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "3": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "4": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "5": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "6": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "7": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "8": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "9": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "10": {
            "id": "5940137",
            "phone": "79842162271"
        }
    }
    useEffect(() => {
        const list = Object.entries(countryList)
        let currentData = [...allData]
        list.map(each => {
            const dataSchema = {
                country_name: each[1].name.toUpperCase(),
                country_code: each[0],
                img: `/images/${each[0]}.png`
            }
            currentData.push(dataSchema)
        })
        setAllData(currentData)
    }, [allData])

    return (
        <div>
            <section id='numberList'>
                {
                    <div className="container">
                        <Row lg={4} md={2} sm={1}>
                            {
                                allData.map((each, i) => {
                                    return (
                                        <Col style={{ minWidth: '18rem' }} className="m-auto mt-4" key={i}>
                                            <Card className="text-center">
                                                <Card.Img className="p-3" id="country_flag" height="180" src={each?.img} alt="Country_Flag" />
                                                <Card.Body>
                                                    {/* <Card.Title id="phone_no">{each?.phone_number}</Card.Title> */}
                                                    <Card.Text id="country_name" className="text-secondary">
                                                        {each?.country_name}
                                                    </Card.Text>
                                                    <Link href={`/number-list/${each?.country_code}`}>
                                                        <Button variant="outline-primary">
                                                            Get Numbers
                                                        </Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                }
            </section>
        </div>
    )
}

export default AllCountries
