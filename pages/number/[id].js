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
import SingleNumPageBlog from "../../Components/Blogs/NumberPage/SingleNumPageBlog";

const NumberPage = ({ data, allRentList }) => {
    const router = useRouter()
    const { id } = router.query

    const [show, setShow] = useState(false);
    const [countryInfo, setCountryInfo] = useState({
        country_name: "",
        country_code: "",
        img: ""
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
                    const tempSchema = {
                        country_name: data[1].name,
                        country_code: numberInfo.country,
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



    // console.log(moment("2022-06-13 16:53:52").utc().format("YYYY-MM-DD HH:mm:ss"))
    // console.log('this one',moment().locale('').format("YYYY-MM-DD HH:mm:ss"))
    // console.log(Date.UTC("2022-06-13 15:36:40"));


    return (
        <div className="container mt-5">
            <div className="numberInfo m-3  text-center">
                <h1 style={{ 'cursor': 'pointer' }} onClick={() => handleMove(countryInfo?.country_code.toLowerCase())}>
                    <img src={countryInfo.img} alt="country_flag" height="25" className="m-2" />
                    <strong>{`${countryInfo.country_name} Phone Number`}</strong>
                </h1>

                <h5><strong>+{allData?.currentNum} <FaCopy onClick={() => handleCopy(allData.currentNum)} /></strong></h5>

                <Button className="m-5" variant="outline-primary" onClick={() => loadAgain()}> <AiOutlineReload /> Update Message</Button>

            </div>
            {/* Sms list */}
            <Table responsive striped borderless size="xl" className=" text-center">
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
                                <tr key={i}>
                                    <td>{each[1].phoneFrom}</td>
                                    <td>{moment(each[1].date).from(moment().format("YYYY-MM-DD HH:mm:ss"))}</td>
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

            {/* blog */}
            <SingleNumPageBlog countryName={countryInfo.country_name}/>

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