import Head from "next/head";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const InactiveNumber = ({ list, pageData }) => {
    const [numberList, setNumberList] = useState([]);

    useEffect(() => {
        if (list.length) {
            let inactiveNumbers = []
            list.map(each => {
                if (each.status === 'inactive') {
                    inactiveNumbers.push(each)
                }
            })
            setNumberList(inactiveNumbers.sort((a, b) => {
                let x = a?.country_name?.toUpperCase()
                let y = b?.country_name?.toUpperCase()
                return x == y ? 0 : x > y ? 1 : -1;
            }))
        }
    }, [])

    // pagination index handler
    const [pIndex, setPIndex] = useState(0);

    // pagination handler using buttons
    const gotoNext = () => pIndex < numberList.length - 20 && setPIndex(pIndex + 20);
    const gotoPrevious = () => pIndex > 20 ? setPIndex(pIndex - 20) : setPIndex(0);
    const goto = (num) => {
        setPIndex(num);

    };
    const middleBtnAmount = Math.ceil(numberList.length / 20);
    let btnGurbageArray = [];
    for (let i = 0; i < middleBtnAmount; i++) {
        btnGurbageArray.push(i);
    }


    return (
        <>
            <Head>
                <title>{pageData ? pageData?.title : "Demo Title"}</title>
                <meta name="description" content={pageData ? pageData?.meta_description : "Demo description"} />
                <meta name="keywords" content={pageData ? pageData?.keyword : "keywords list"} />
            </Head>
            <div>
                <div
                    id="country_list_top"
                    className="text-center bg-dark text-light d-flex justify-content-center align-items-center"
                    style={{ minHeight: "10vh" }}
                >
                    <div className=" mt-5 p-5">
                        <h3 className="">In-active Phone Number List</h3>
                        <p>
                            We currently provide Free 49 Regions Virtual Temporary Phone
                            Numbers.
                        </p>
                    </div>
                </div>
                {
                    numberList.length > 0 && (
                        <section id="numberList">
                            <div className="container">
                                <Row lg={4} md={6} sm={1}>
                                    {numberList?.slice(pIndex, pIndex + 20).map((each, i) => {
                                        return (
                                            <Col
                                                lg={3}
                                                md={6}
                                                sm={1}
                                                style={{ minWidth: "18rem" }}
                                                className="m-auto mt-4"
                                                key={i}
                                            >
                                                <a href={`/free-${each?.country_slug}-number/${each?.phone_number}`}>
                                                    <Card id="card_section" className="text-center">
                                                        <Card.Img
                                                            className="p-3"
                                                            id="country_flag"
                                                            height="180"
                                                            src={`/images/${each.country_code}.png`}
                                                            alt="Country_Flag"
                                                        />
                                                        <Card.Body>
                                                            <Card.Title id="phone_no">+{each?.phone_number}</Card.Title>
                                                            <Card.Text
                                                                id="country_name"
                                                                className="text-secondary"
                                                            >
                                                                {each?.country_name}
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </a>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </div>
                            <div className="pagination-handler">
                                <button onClick={gotoPrevious} className="previous-btn btn">Previous</button>
                                {btnGurbageArray.map((pageNumber, i) => {
                                    return (
                                        <button key={i} onClick={() => goto(pageNumber * 20)} className={`${pIndex / 20 === pageNumber && "current-page"} btn px-3 py-1`}>
                                            {pageNumber + 1}
                                        </button>
                                    );
                                })}
                                <button onClick={gotoNext} className="next-btn btn">Next</button>
                            </div>
                        </section>
                    )
                }
                {
                    numberList.length <= 0 && (
                        <div id="no_number_list mt-5">
                            <div className=" d-flex align-items-center" style={{ minHeight: '50vh' }}>
                                <div className="text-center m-auto">
                                    <h1>Sorry !!</h1>
                                    <p>Currently there has no inactive number.</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}


export default InactiveNumber


export async function getServerSideProps() {
    const result = await fetch('http://localhost:8080/number/list')
    const value = await result.json()

    const data = await fetch('http://localhost:8080/page/inactive_number')
    const resData = await data.json()
    return {
        props: {
            list: value.success ? value.list : [],
            pageData: resData.success ? resData.data : null
        }
    }
}