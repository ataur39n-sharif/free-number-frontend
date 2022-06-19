import { useEffect, useState } from "react"
import parsePhoneNumber from 'libphonenumber-js'
import { countryList } from "../utils/countries/countries"
import NumberList from "../Components/Homepage/NumberList"
import NoNumberList from "../Components/Homepage/NumberList/NoNumberList"
import { Button, Card, Col, Row } from "react-bootstrap"
import Link from "next/link"
import Pagination from 'react-bootstrap/Pagination';

const AllCountries = ({ data }) => {
    const [allData, setAllData] = useState([])
    const list = Object.entries(countryList)


    useEffect(() => {
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
    }, [])


    return (
        <div>
            <section id='numberList'>
                <div className="text-center bg-dark text-light d-flex justify-content-center align-items-center" style={{ minHeight: "10vh" }}>
                    <div>
                        <h3 className="">All Regions Phone Number List</h3>
                        <p>We currently provide Free 49 Regions Virtual Temporary Phone Numbers.</p>
                    </div>
                </div>
                {
                    <div className="container">
                        <Row lg={4} md={6} sm={1}>
                            {
                                allData.map((each, i) => {
                                    return (
                                        <Col lg={3} md={6} sm={1} style={{ minWidth: '18rem' }} className="m-auto mt-4" key={i}>
                                            <Link href={`/number-list/${each?.country_code}`}>
                                                <Card id="card_section" className="text-center">
                                                    <Card.Img className="p-3" id="country_flag" height="180" src={each?.img} alt="Country_Flag" />
                                                    <Card.Body>
                                                        {/* <Card.Title id="phone_no">{each?.phone_number}</Card.Title> */}
                                                        <Card.Text id="country_name" className="text-secondary">
                                                            {each?.country_name}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Link>
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
