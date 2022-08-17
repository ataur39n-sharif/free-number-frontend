import { Button, Card, Col } from "react-bootstrap"
import parsePhoneNumber from 'libphonenumber-js'
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { countryList } from "../../../utils/countries/countries";
// import Image from "next/image";

const SingleNumber = ({ data }) => {
    const [info, setInfo] = useState({
        country_name: "",
        country_code: "",
        country_slug: "",
        img: ""
    })
    const phoneNumber = parsePhoneNumber(`+${data[1].number}`)

    useEffect(() => {
        if (phoneNumber) {
            const list = Object.entries(countryList)
            const data = list.find(each => each[0] === phoneNumber.country.toLowerCase())
            if (data) {
                const tempSchema = {
                    country_name: data[1].name,
                    country_code: phoneNumber.country,
                    country_slug: data[1].slug,
                    img: `/images/${phoneNumber.country.toLowerCase()}.png`
                }
                setInfo(tempSchema)
            }
        }
    }, [])
    return (
        <Col style={{ minWidth: '18rem' }} className="m-auto mt-4">
            <Link href={`/free-${info.country_slug}-number/${data[1].number}`}>
                <Card
                    id="card_section"
                    className="text-center"
                    style={{ height: "30vh" }}
                // style={{ borderLeft: "5px solid gray", borderRight: "5px solid gray", }}
                >
                    {/* <Image
                        src={info ? info.img:"/images/us.png"}
                        alt="Country_Flag"
                        layout="fill"
                    // sizes="(min-width: 75em) 33vw,
                    // (min-width: 48em) 50vw,
                    // 100vw"
                    /> */}
                    {/* <Image
                        src="/image/top_div_cover_photo.jpg"
                        alt="top_div_bg_img"
                        layout="responsive"
                        width="70%"
                        height="50%"
                        style={{
                            margin:"2%"
                        }}
                        // sizes="(min-width: 75em) 33vw,
                        // (min-width: 48em) 50vw,
                        // 100vw"
                        quality={50}
                    /> */}
                    <Card.Img className="p-3" id="country_flag" src={info?.img} style={{ minHeight: "17vh", minWidth: "30px" }} alt="Country_Flag" />
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