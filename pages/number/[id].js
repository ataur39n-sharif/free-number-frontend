import moment from "moment";
import { useRouter } from "next/router"
import { Button, Stack, Table, Toast, ToastContainer } from "react-bootstrap";
import copy from 'copy-text-to-clipboard';
import { FaCopy } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai'
import { useEffect, useState } from "react";
import { countryList } from "../../utils/countries/countries";
import { parsePhoneNumber } from "libphonenumber-js";
import Link from "next/link";

const NumberPage = ({ data, allRentList }) => {
    const [show, setShow] = useState(false);
    const [countryInfo, setCountryInfo] = useState({
        country_name: "",
        country_code: "",
        img: ""
    })
    const router = useRouter()
    const { id } = router.query

    const loadAgain = () => {
        window.location.reload(false)
    }

    const temp = {
        status: 'success',
        quantity: '2',
        values: {
            0: {
                phoneFrom: "79180230628",
                text: "ignissimos minima officia minus ullam, maxime adipisci? Atque sequi ducimus nam natus voluptatum consequuntur molestiae!",
                service: "ot",
                date: "2020-01-30 14:31:58"
            },
            "1": {
                "phoneFrom": "79180230628",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, mollitia?",
                "service": "ot",
                "date": "2020-01-30 14:04:16"
            }
        }
    }
    const tempData = Object.entries(temp.values)
    const allNumList = allRentList ? Object.entries(allRentList.values) : []
    const currentNum = allNumList.find(each => each[1].id === id)
    const phoneNumber = parsePhoneNumber(`+${currentNum[1].phone}`)

    useEffect(() => {
        if (phoneNumber) {
            const list = Object.entries(countryList)
            const data = list.find(each => each[0] === phoneNumber.country.toLocaleLowerCase())
            if (data) {
                const tempSchema = {
                    country_name: data[1].name,
                    country_code: phoneNumber.country,
                    img: `/images/${phoneNumber.country.toLocaleLowerCase()}.png`
                }
                setCountryInfo(tempSchema)
            }
        }
    }, [])

    const handleCopy = () => {
        copy(`+${currentNum[1].phone}`)
        setShow(true)
    }
    const handleMove = (code) => {
        window.location.replace(`/number-list/${code}`)
    }

    return (
        <div className="container mt-5 text-center">
            <div className="numberInfo m-3">
                <h1 style={{ 'cursor': 'pointer' }} onClick={() => handleMove(countryInfo?.country_code)}>
                    <img src={countryInfo.img} alt="country_flag" height="25" className="m-2" />
                    <strong>{`${countryInfo.country_name} Phone Number`}</strong>
                </h1>

                <h5><strong>+{currentNum[1].phone} <FaCopy onClick={() => handleCopy()} /></strong></h5>

                <Button className="m-5" variant="outline-primary" onClick={() => loadAgain()}> <AiOutlineReload /> Update Message</Button>

            </div>
            {/* Sms list */}

            <Table responsive striped borderless size="xl">
                <thead className="table-primary">
                    <tr>
                        <th>From</th>
                        <th>Time</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // data.status === 'success' && data.quantity > 0 &&
                        tempData.map((each, i) => {
                            return (
                                <tr key={i}>
                                    <td>+{each[1].phoneFrom.slice(0, 7)}****</td>
                                    <td>{moment(each[1].date).fromNow()}</td>
                                    <td colSpan={2}>{each[1].text}</td>
                                </tr>
                            )
                        })


                    }
                    {data.status === 'error' &&
                        < tr >
                            <td colSpan={4} className="table-warning">No data</td>
                        </tr>
                    }
                </tbody>
            </Table>
            {/* toast section */}
            <ToastContainer className="p-3" position={'top-end'}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="m-auto text-success">Copied !!</strong>
                    </Toast.Header>
                    <Toast.Body bg="light">Number: +{currentNum[1].phone}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div >
    )
}

export default NumberPage

export async function getServerSideProps(context) {
    const result = await fetch(`${process.env.CURRENT_SITE_LINK}/api/getNumberRentStatus/${context.query.id}`)
    const value = await result.json()

    const rentList = await fetch(`${process.env.CURRENT_SITE_LINK}/api/getRentNumberList`)
    const list = await rentList.json()

    return {
        props: {
            data: value || null,
            allRentList: list || null
        }
    }
}