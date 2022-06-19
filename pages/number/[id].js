import moment from "moment";
import { useRouter } from "next/router"
import { Button, Col, Row, Stack, Table, Toast, ToastContainer } from "react-bootstrap";
import copy from 'copy-text-to-clipboard';
import { FaCopy } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai'
import { useEffect, useState } from "react";
import { countryList } from "../../utils/countries/countries";
import countryWithTimezone from "../../utils/countries_timezone/country-codes.json"
import { parsePhoneNumber } from "libphonenumber-js";
import Link from "next/link";
import SingleNumPageBlog from "../../Components/Blogs/NumberPage/SingleNumPageBlog";
import { getTimezone } from "countries-and-timezones";

const NumberPage = ({ data, allRentList }) => {
    const router = useRouter()
    const { id } = router.query

    const [show, setShow] = useState(false);
    const [countryInfo, setCountryInfo] = useState({
        country_name: "",
        country_code: "",
        current_time: "",
        timezone: {},
        img: "",
    })
    const [allData, setAllData] = useState({})

    useEffect(() => {
        if (allRentList.status === 'success') {
            const smsList = data.status === 'success' ? Object.entries(data.values) : []
            const allNumList = Object.entries(allRentList.values)
            const currentNumInfo = allNumList.find(each => each[1].id === id)
            const numberInfo = parsePhoneNumber(`+${currentNumInfo[1].phone}`)

            setAllData({ ...allData, smsList, currentNum: currentNumInfo[1].phone })

            if (numberInfo) {
                const list = Object.entries(countryList)
                const data = list.find(each => each[0] === numberInfo.country.toLocaleLowerCase())
                if (data) {
                    const country = countryWithTimezone.find(each => each.iso2 === numberInfo.country)

                    let d = new Date()
                    let utc_offset = d.getTimezoneOffset()
                    d.setMinutes(d.getMinutes() + utc_offset)

                    // let select_country = getTimezone(country["time-zone-in-capital"])
                    let select_country = 3 * 60
                    d.setMinutes(d.getMinutes() + select_country)

                    const tempSchema = {
                        country_name: data[1].name,
                        country_code: numberInfo.country,
                        current_time: d,
                        timeZone: getTimezone(country["time-zone-in-capital"]),
                        img: `/images/${numberInfo.country.toLocaleLowerCase()}.png`
                    }
                    setCountryInfo(tempSchema)
                }
            }

        }

    }, [])

    //number copy
    const handleCopy = (number) => {
        copy(`+${number}`)
        setShow(true)
    }
    //selected countries number list 
    const handleMove = (code) => {
        window.location.replace(`/number-list/${code}`)
    }
    //update message
    const loadAgain = () => {
        window.location.reload(false)
    }

    return (
        <div className="container mt-5">
            <div className="numberInfo m-3  text-center">
                <h1 style={{ 'cursor': 'pointer' }} onClick={() => handleMove(countryInfo?.country_code.toLowerCase())}>
                    <img src={countryInfo.img} alt="country_flag" height="45" className="m-2" />
                    <p><strong>{`${countryInfo.country_name} Phone Number`}</strong></p>
                </h1>
                <h5><strong>+{allData?.currentNum} <FaCopy onClick={() => handleCopy(allData.currentNum)} /></strong></h5>
                <Button className="m-5" variant="outline-primary" onClick={() => loadAgain()}> <AiOutlineReload /> Refresh this page</Button>
            </div>
            {/* Sms list */}
            <div>
                {
                    data.status === 'success' &&
                    allData?.smsList?.map((each, i) => {
                        return (
                            <Row key={i} className="m-3 text-center bg-light" style={{ borderRadius: "15px" }}>
                                <Col md={5} sm={12} className="p-2">
                                    [{each[1].phoneFrom}] - [{moment(each[1].date).from(moment(countryInfo.current_time).format("YYYY-MM-DD HH:mm:ss"))}]
                                </Col>
                                <Col md={7} sm={12} className="p-2">
                                    - {each[1].text}
                                </Col>
                            </Row>
                        )
                    })
                }
                {
                    data.status === 'error' &&
                    <Row key={i} className="m-3 text-center bg-light" style={{ borderRadius: "15px" }}>
                        <span className="p-2">
                            No message found !!
                        </span>
                    </Row>
                }
            </div>
            {/* <Table responsive striped borderless size="xl" className=" text-center">
                <thead className="table-primary">
                    <tr>
                        <th>From</th>
                        <th>Time</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.status === 'success' &&
                        allData?.smsList?.map((each, i) => {
                            return (
                                // <tr key={i}>
                                <div>
                                    <span>
                                        [{each[1].phoneFrom}] - [{moment(each[1].date).from(moment(countryInfo.current_time).format("YYYY-MM-DD HH:mm:ss"))}]
                                    </span>
                                </div>
                                // <td>{each[1].phoneFrom}</td>
                                // <td>{moment(each[1].date).from(moment(countryInfo.current_time).format("YYYY-MM-DD H:m:s"))}</td>
                                // <td colSpan={2}>{each[1].text}</td>
                                // </tr>
                            )
                        })


                    }
                    {data.status === 'error' &&
                        < tr >
                            <td colSpan={4} className="table-warning">No data</td>
                        </tr>
                    }
                </tbody>
            </Table> */}

            {/* blog */}
            <SingleNumPageBlog countryName={countryInfo.country_name} />

            {/* toast section */}
            <ToastContainer className="p-3" position={'top-end'}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="m-auto text-success">Copied !!</strong>
                    </Toast.Header>
                    <Toast.Body bg="light">Number: +{allData?.currentNum}</Toast.Body>
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