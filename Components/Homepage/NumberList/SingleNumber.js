import { Button, Card, Col } from "react-bootstrap"
import parsePhoneNumber from 'libphonenumber-js'
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const SingleNumber = ({ data }) => {
    const [info, setInfo] = useState()
    const phoneNumber = parsePhoneNumber(`+${data[1].phone}`)

    useEffect(() => {
        if (phoneNumber) {
            axios.get(`https://restcountries.com/v2/alpha/${phoneNumber.country}`)
                .then(res => setInfo(res.data))
                .catch(err => alert(err.message))
        }
    }, [])

    return (
        <Col style={{ minWidth: '18rem' }} className="m-auto mt-4">
            <Card className="text-center">
                <Card.Img className="p-3" id="country_flag" src={info?.flags?.png} alt="Country_Flag" />
                <Card.Body>
                    <Card.Title id="phone_no">{phoneNumber?.number}</Card.Title>
                    <Card.Text id="country_name" className="text-secondary">
                        {info?.name}
                    </Card.Text>
                    <Link href={`/number/${data[1].phone}`}>
                        <Button variant="outline-primary">
                            Receive SMS Online
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleNumber;