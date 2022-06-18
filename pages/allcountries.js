import { useEffect, useState } from "react"
import parsePhoneNumber from 'libphonenumber-js'
import { countryList } from "../utils/countries/countries"
import NumberList from "../Components/Homepage/NumberList"
import NoNumberList from "../Components/Homepage/NumberList/NoNumberList"
import { Button, Card, Col, Row } from "react-bootstrap"
import Link from "next/link"
import Pagination from 'react-bootstrap/Pagination';

const AllCountries = ({ data }) => {
    // const [pageNo, setPageNo] = useState(1)
    const [allData, setAllData] = useState([])
    const list = Object.entries(countryList)

    let active = 1;

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
        setAllData(currentData.slice((active - 1) * 20, active * 20))
    }, [active])


    let items = [];
    for (let number = 1; number <= Math.ceil(list.length / 20); number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <div>
            <section id='numberList'>
                <div className="text-center bg-dark text-light d-flex justify-content-center align-items-center" style={{ minHeight: "10vh" }}>
                    <div>
                        <h3 className="">All Regions Phone Number List</h3>
                        <p>We currently provide Free 49 Regions Virtual Temporary Phone Numbers.</p>
                    </div>
                </div>
                <Pagination>{items}</Pagination>
                {
                    <div className="container">
                        <Row lg={4} md={6} sm={1}>
                            {
                                allData.map((each, i) => {
                                    return (
                                        <Col lg={3} md={6} sm={1} style={{ minWidth: '18rem' }} className="m-auto mt-4" key={i}>
                                            <Link href={`/number-list/${each?.country_code}`}>
                                                <Card className="text-center">
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
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </section>
        </div>
    )
}

export default AllCountries
