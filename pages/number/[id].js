import copy from "copy-text-to-clipboard";
import { getTimezone } from "countries-and-timezones";
import { parsePhoneNumber } from "libphonenumber-js";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col, Row, Toast, ToastContainer } from "react-bootstrap";
import { AiOutlineReload } from "react-icons/ai";
import { FaCopy } from "react-icons/fa";
import SingleNumPageBlog from "../../Components/Blogs/NumberPage/SingleNumPageBlog";
import { countryList } from "../../utils/countries/countries";
import countryWithTimezone from "../../utils/countries_timezone/country-codes.json";

const NumberPage = ({ data, allRentList }) => {
    const router = useRouter();
    const { id } = router.query;

    const [show, setShow] = useState(false);
    const [countryInfo, setCountryInfo] = useState({
        country_name: "",
        country_code: "",
        current_time: "",
        timezone: {},
        img: "",
    });
    const [allData, setAllData] = useState({});

    useEffect(() => {
        if (allRentList.status === "success") {
            const smsList =
                data.status === "success" ? Object.entries(data.values) : [];
            const allNumList = Object.entries(allRentList.values);
            const currentNumInfo = allNumList.find((each) => each[1].id === id);
            const numberInfo = parsePhoneNumber(`+${currentNumInfo[1].phone}`);

            setAllData({ ...allData, smsList, currentNum: currentNumInfo[1].phone });

            if (numberInfo) {
                const list = Object.entries(countryList);
                const data = list.find(
                    (each) => each[0] === numberInfo.country.toLocaleLowerCase()
                );
                if (data) {
                    const country = countryWithTimezone.find(
                        (each) => each.iso2 === numberInfo.country
                    );

                    let d = new Date();
                    let utc_offset = d.getTimezoneOffset();
                    d.setMinutes(d.getMinutes() + utc_offset);

                    // let select_country = getTimezone(country["time-zone-in-capital"])
                    let select_country = 3 * 60;
                    d.setMinutes(d.getMinutes() + select_country);

                    const tempSchema = {
                        country_name: data[1].name,
                        country_code: numberInfo.country,
                        current_time: d,
                        timeZone: getTimezone(country["time-zone-in-capital"]),
                        img: `/images/${numberInfo.country.toLocaleLowerCase()}.png`,
                    };
                    setCountryInfo(tempSchema);
                }
            }
        }
    }, []);

    //number copy
    const handleCopy = (number) => {
        copy(`+${number}`);
        setShow(true);
    };
    //selected countries number list
    const handleMove = (code) => {
        window.location.replace(`/number-list/${code}`);
    };
    //update message
    const loadAgain = () => {
        window.location.reload(false);
    };

    // pagination index handler
    const [pIndex, setPIndex] = useState(0);

    console.log(allData)
    // pagination handler using buttons
    const gotoNext = () => pIndex < allData?.smsList?.length - 20 && setPIndex(pIndex + 20);
    const gotoPrevious = () =>
        pIndex > 20 ? setPIndex(pIndex - 20) : setPIndex(0);
    const goto = (num) => {
        setPIndex(num);
    };
    const middleBtnAmount = Math.ceil(allData?.smsList?.length / 20);
    let btnGurbageArray = [];
    for (let i = 0; i < middleBtnAmount; i++) {
        btnGurbageArray.push(i);
    }

    return (
        <div className="container mt-5">
            <div className="numberInfo m-3  text-center">
                <div
                    style={{ cursor: "pointer" }}
                    onClick={() => handleMove(countryInfo?.country_code.toLowerCase())}
                >
                    <img
                        src={countryInfo.img}
                        alt="country_flag"
                        height="45"
                        className="m-2"
                    />
                    <h1>
                        <strong>{`${countryInfo.country_name} Phone Number`}</strong>
                    </h1>
                    <p>Receive SMS Online for Free</p>
                </div>
                <h5>
                    <strong>
                        +{allData?.currentNum}{" "}
                        <FaCopy onClick={() => handleCopy(allData.currentNum)} />
                    </strong>
                </h5>
                <Button
                    className="m-5"
                    variant="outline-primary"
                    onClick={() => loadAgain()}
                >
                    {" "}
                    <AiOutlineReload /> Refresh this page
                </Button>
            </div>
            {/* Sms list */}
            <div>

                <Row className="m-3 text-center bg-info p-2">
                    <Col md={3}>From</Col>
                    <Col md={3}>Time</Col>
                    <Col md={6}>Message</Col>
                </Row>

                {data.status === "success" &&
                    allData?.smsList?.slice(pIndex, pIndex + 20).map((each, i) => {
                        return (
                            <Row key={i} className="m-3 text-center bg-light border border-primary" style={{ borderRadius: "15px" }}>
                                <Col md={3} sm={12} className="p-2">
                                    [{each[1].phoneFrom}]
                                </Col>
                                <Col md={3} sm={12} className="p-2">
                                    [{moment(each[1].date).from(moment(countryInfo.current_time).format("YYYY-MM-DD HH:mm:ss"))}]
                                </Col>
                                <Col md={6} sm={12} className="p-2">
                                    {each[1].text}
                                </Col>
                            </Row>
                        );
                    })}
                {data.status === "error" && (
                    <Row
                        // key={i}
                        className="m-3 text-center bg-light"
                        style={{ borderRadius: "15px" }}
                    >
                        <span className="p-2">No message found !!</span>
                    </Row>
                )}
            </div>
            {
                allData?.smsList?.length > 0 &&
                <div className="pagination-handler">
                    <button onClick={gotoPrevious} className="previous-btn btn">Previous</button>
                    {
                        btnGurbageArray.map((pageNumber, i) => {
                            return (
                                <button key={i} onClick={() => goto(pageNumber * 20)} className={`${pIndex / 20 === pageNumber && "current-page"} btn px-3 py-1`}>
                                    {pageNumber + 1}
                                </button>
                            );
                        })}
                    <button onClick={gotoNext} className="next-btn btn">Next</button>
                </div>
            }
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
            <ToastContainer
                className="p-3"
                position={"top-end"}
                style={{ zIndex: "100" }}
            >
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="m-auto text-success">Copied !!</strong>
                    </Toast.Header>
                    <Toast.Body bg="light">Number: +{allData?.currentNum}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
};

export default NumberPage;

export async function getServerSideProps(context) {
    const result = await fetch(
        `${process.env.CURRENT_SITE_LINK}/api/getNumberRentStatus/${context.query.id}`
    );
    const value = await result.json();

    const rentList = await fetch(
        `${process.env.CURRENT_SITE_LINK}/api/getRentNumberList`
    );
    const list = await rentList.json();

    return {
        props: {
            data: value || null,
            allRentList: list || null,
        },
    };
}
