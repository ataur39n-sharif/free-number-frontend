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


const NumberPage = ({ data }) => {
    const router = useRouter();
    const { id } = router.query;
    const [countryInfo, setCountryInfo] = useState({
        country_name: "",
        country_code: "",
        current_time: "",
        timezone: {},
        img: "",
    });
    const [allData, setAllData] = useState({});
    const [refreshCount, setRefreshCount] = useState(10)


    useEffect(() => {
        // setRefreshCount(10)
        const smsList = data?.length ? Object.entries(data) : [];

        //valid a phone number
        const num = Number(id)
        const num_length = Number.isInteger(num) ? Array.from(String(num), Number) : 0;

        const numberInfo = Number.isInteger(num) && num_length.length > 9 ? parsePhoneNumber(`+${id}`) : 0;
        setAllData({ ...allData, smsList });
        if (numberInfo) {
            const list = Object.entries(countryList);
            const data = list.find(
                (each) => each[0] === numberInfo?.country?.toLocaleLowerCase()
            );
            const tempSchema = {
                country_name: data ? data[1].name : numberInfo.country,
                country_code: numberInfo.country,
                // current_time: d,
                // timeZone: getTimezone(country["time-zone-in-capital"]),
                img: `/images/${numberInfo?.country?.toLocaleLowerCase()}.png`,
            };
            setCountryInfo(tempSchema);
        }
    }, []);

    //auto reload every 10s
    // useEffect(() => {
    //     setInterval(() => {
    //         loadAgain()
    //     }, 10000)
    // }, [])

    //auto reload time counter
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         if (refreshCount === 0) {
    //             setRefreshCount(10)
    //         } else {
    //             setRefreshCount(refreshCount - 1)
    //         }
    //     }, 1000)

    //     return () => {
    //         clearInterval(timer)
    //     }

    // }, [refreshCount])

    //number copy
    const handleCopy = (number) => {
        copy(`+${number}`);
        // setShow(true);
        alert('Copied !')
    };
    //selected countries number list
    const handleMove = (code) => {
        router.replace(`/number-list/${code}`);
    };
    //update message
    const loadAgain = () => {
        router.reload()
    };


    // pagination index handler
    const [pIndex, setPIndex] = useState(0);

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
                        <strong>{`${countryInfo.country_name ? countryInfo.country_name : "Invalid country"} Phone Number`}</strong>
                    </h1>
                    <p>Receive SMS Online for Free</p>
                </div>
                <div>
                    <h5>
                        <strong>
                            +{id}{" "}
                            <FaCopy onClick={() => handleCopy(id)} />
                        </strong>
                    </h5>
                </div>

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

                {data?.length &&
                    allData?.smsList?.slice(pIndex, pIndex + 20).map((each, i) => {
                        return (
                            <Row key={i} className="m-3 text-center bg-light border border-primary" style={{ borderRadius: "15px" }}>
                                <Col md={3} sm={12} className="p-2">
                                    [{typeof (each[1].sender) === "number" ? `+{each[1].sender}` : each[1].sender}]
                                </Col>
                                <Col md={3} sm={12} className="p-2">
                                    [{moment(each[1].createdAt).from(moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"))}]
                                </Col>
                                <Col md={6} sm={12} className="p-2">
                                    {each[1].message}
                                </Col>
                            </Row>
                        );
                    })}
                {data === null && (
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

            {/* blog */}
            <SingleNumPageBlog countryName={countryInfo.country_name} />

            {/* toast section */}

            {/* <ToastContainer
                className="p-3"
                position={"center"}
                style={{ zIndex: "100" }}
            >
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="m-auto text-success">Copied !!</strong>
                    </Toast.Header>
                    <Toast.Body bg="light">Number: +{id}</Toast.Body>
                </Toast>
            </ToastContainer> */}
        </div>
    );
};

export default NumberPage;

export async function getServerSideProps(context) {
    const result = await fetch(
        `https://test-api.ataur.dev/all-sms/${context.query.id}`
    );
    const { success, msgList } = await result.json();

    return {
        props: {
            data: success && msgList.length ? msgList : null,
            allRentList: null,
        },
    };
}
