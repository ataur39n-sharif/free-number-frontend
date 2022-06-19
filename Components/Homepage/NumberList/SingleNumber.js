import { Button, Card, Col } from "react-bootstrap"
import parsePhoneNumber from 'libphonenumber-js'
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { countryList } from "../../../utils/countries/countries";

const SingleNumber = ({ data }) => {
    const [info, setInfo] = useState({
        country_name: "",
        country_code: "",
        img: ""
    })
    const phoneNumber = parsePhoneNumber(`+${data[1].phone}`)

    useEffect(() => {
        if (phoneNumber) {
            const list = Object.entries(countryList)
            const data = list.find(each => each[0] === phoneNumber.country.toLowerCase())
            if (data) {
                const tempSchema = {
                    country_name: data[1].name,
                    country_code: phoneNumber.country,
                    img: `/images/${phoneNumber.country.toLowerCase()}.png`
                }
                setInfo(tempSchema)
            }
        }
    }, [])

    return (
        <Col style={{ minWidth: '18rem' }} className="m-auto mt-4">
            <Link href={`/number/${data[1].id}`}>
                <Card
                    id="card_section"
                    className="text-center"
                    // style={{ borderLeft: "5px solid gray", borderRight: "5px solid gray", }}
                >
                    <Card.Img className="p-3" id="country_flag" src={info?.img} style={{ minHeight: "25vh" }} alt="Country_Flag" />
                    <Card.Body>
                        <Card.Title id="phone_no">{phoneNumber?.number}</Card.Title>
                        <Card.Text id="country_name" className="text-secondary">
                            {info?.country_name}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col >
    )
}

export default SingleNumber;