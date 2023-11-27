import copy from "copy-text-to-clipboard";
import { parsePhoneNumber } from "libphonenumber-js";
import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { AiOutlineReload } from "react-icons/ai";
import { FaCopy } from "react-icons/fa";
import { countryList } from "../../utils/countries/countries";


const NumberPage = ({ data, pageData, blogData }) => {
    const router = useRouter();
    const { id } = router.query;
    const [countryInfo, setCountryInfo] = useState({
        country_name: "",
        country_code: "",
        country_slug: "",
        current_time: "",
        timezone: {},
        img: "",
    });
    const [allData, setAllData] = useState({});
    const [show, setShow] = useState(false)
    const [blogAddCount, setBlogAddCount] = useState(0)

    useEffect(() => {
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
                img: `/images/${numberInfo?.country?.toLocaleLowerCase()}.png`,
            };
            setCountryInfo(tempSchema);

            //blog code
            if (blogAddCount === 0) {
                //for title 
                const blogTitleDiv = document.createElement('div')
                const blogTitle = blogData && blogData?.title?.split('country_name').join(data && data[1].name)?.split('phone_number').join(`+${id}`)
                blogTitleDiv.innerHTML = blogTitle

                const mainTitleDiv = document.getElementById('title')
                mainTitleDiv.appendChild(blogTitleDiv)

                //for discription

                const blogDescriptionDiv = document.createElement('div')
                const blogDescription = blogData && blogData?.description?.split('country_name').join(data && data[1].name)?.split('phone_number').join(`+${id}`)
                blogDescriptionDiv.innerHTML = blogDescription

                const mainDescriptionDiv = document.getElementById('description')
                mainDescriptionDiv.appendChild(blogDescriptionDiv)

                blogAddCount++;
            }
        }
    }, []);

    useEffect(() => {
        if (show) {
            setTimeout(() => {
                setShow(false)
            }, 5000)
        }
    }, [show])

    //number copy
    const handleCopy = (number) => {
        copy(`+${number}`);
        setShow(true);
    };
    //selected countries number list
    const handleMove = (code) => {
        router.replace(`/countries/${code?.toLowerCase()?.split(' ')?.join('-')}`);
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

    // console.log("data", blogData)

    return (
        <>
            <Head>
                <title>{pageData?.page_title ? pageData?.page_title.split('country_name').join(countryInfo?.country_name).split('phone_number').join(`+${id}`) : "Demo title"}</title>
                <meta name="description" content={pageData ? pageData?.meta_description.split('country_name').join(countryInfo?.country_name).split('phone_number').join(`+${id}`) : "Demo description"} />
                <meta name="keywords" content={pageData ? pageData?.keywords.split('country_name').join(countryInfo?.country_name).split('phone_number').join(`+${id}`) : "Demo keyword"} />

            </Head>
            <div className="container mt-5">
                <div className="numberInfo m-3  text-center">
                    <div
                        style={{ cursor: "pointer" }}
                        onClick={() => handleMove(countryInfo?.country_name)}
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
                        <h5 >
                            <strong>
                                +{id}{" "}
                                <FaCopy onClick={() => handleCopy(id)} />
                            </strong>
                        </h5>
                        {
                            show && <small className="p-2">Copied !</small>
                        }
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
                                        [{each[1].sender}]
                                    </Col>
                                    <Col md={3} sm={12} className="p-2">
                                        {
                                            each[1]?.data_humans ? each[1].data_humans : <span>[{moment(each[1].createdAt).from(moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"))}]</span>
                                        }
                                    </Col>
                                    <Col md={6} sm={12} className="p-2">
                                        {each[1].message?.split('received from OnlineSIM.ru')?.join('')}
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
                {/* <SingleNumPageBlog countryName={countryInfo?.country_name} blogData={blogData} number={id} /> */}

                <div className=" m-5">
                    <div className="text-center" id="title">

                    </div>
                    <div id="description">

                    </div>
                </div>

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
        </>
    );
};

export default NumberPage;

export async function getServerSideProps(context) {
    const result = await fetch(
        `https://api.receivesmsonline.io/all-sms/${context.query.id}`
    );
    // const result = await fetch(
    //     `http://localhost:5000/all-sms/${context.query.id}`
    // );
    const { success, msgList } = await result.json();

    const pageDataReq = await fetch('https://api.receivesmsonline.io/number-page-data')
    const pageData = await pageDataReq.json()

    const blogReq = await fetch('https://api.receivesmsonline.io/blog/number_page')
    const blogData = await blogReq.json()

    // const res = await fetch()

    return {
        props: {
            data: success && msgList.length ? msgList : null,
            allRentList: null,
            pageData: pageData.success ? pageData.data : null,
            blogData: blogData.success ? blogData.blog : null
        },
    };
}
