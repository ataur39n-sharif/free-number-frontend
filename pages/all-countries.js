import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { countryList } from "../utils/countries/countries";

const AllCountries = ({ pageData }) => {
  const [allData, setAllData] = useState([]);
  const list = Object.entries(countryList);

  // pagination index handler
  const [pIndex, setPIndex] = useState(0);
  const activeList = ['AUSTRALIA', 'CANADA', 'CZECH REPUBLIC', 'DENMARK', 'HUNGARY', 'INDONESIA', 'MEXICO', 'NETHERLANDS', 'PORTUGAL', 'ROMANIA', 'SLOVAKIA', 'SWEDEN', 'UNITED KINGDOM', 'UNITED STATES']

  //console.log(activeList);
  useEffect(() => {
    let currentData = [];
    list.map((each) => {
      const dataSchema = {
        country_name: each[1].name.toUpperCase(),
        country_slug: each[1].slug,
        country_code: each[0],
        img: `/images/${each[0]}.png`,
      };
      if (activeList.includes(dataSchema?.country_name)) {
        currentData.push(dataSchema);
      }
    });

    setAllData(currentData.sort((a, b) => {
      let x = a.country_name.toUpperCase()
      let y = b.country_name.toUpperCase()
      return x == y ? 0 : x > y ? 1 : -1;
    }));
  }, []);

  // pagination handler using buttons
  const gotoNext = () => pIndex < allData.length - 20 && setPIndex(pIndex + 20);
  const gotoPrevious = () => pIndex > 20 ? setPIndex(pIndex - 20) : setPIndex(0);
  const goto = (num) => {
    setPIndex(num);

  };
  const middleBtnAmount = Math.ceil(allData.length / 20);
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
        <section id="numberList">
          <div
            id="country_list_top"
            className="text-center bg-dark text-light d-flex justify-content-center align-items-center"
            style={{ minHeight: "10vh" }}
          >
            <div className=" mt-5 p-5">
              <h3 className="">All Regions Phone Number List</h3>
              <p>
                We currently provide Free 49 Regions Virtual Temporary Phone
                Numbers.
              </p>
            </div>
          </div>

          {
            <div className="container">
              <Row lg={4} md={6} sm={1}>
                {allData?.slice(pIndex, pIndex + 20).map((each, i) => {
                  return (
                    <Col
                      lg={3}
                      md={6}
                      sm={1}
                      style={{ minWidth: "18rem" }}
                      className="m-auto mt-4"
                      key={i}
                    >
                      <a href={`/countries/${each?.country_slug}`}>
                        <Card id="card_section" className="text-center">
                          <Card.Img
                            className="p-3"
                            id="country_flag"
                            height="180"
                            src={each?.img}
                            alt="Country_Flag"
                          />
                          <Card.Body>
                            {/* <Card.Title id="phone_no">{each?.phone_number}</Card.Title> */}
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
          }
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
      </div>
    </>

  );
};

export default AllCountries;

export async function getServerSideProps(context) {
  const pageDataReq = await fetch('https://real-jade-chimpanzee-vest.cyclic.app/page/all_country_page')
  const pageData = await pageDataReq.json()

  return {
    props: {
      pageData: pageData.success ? pageData.data : null
    },
  };
}