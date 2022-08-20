import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  VKIcon,
  VKShareButton
} from "next-share";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import FooterBottom from "../Components/Homepage/Footer/footer-bottom";
import FooterTop from "../Components/Homepage/Footer/footer-top";
import NumberList from "../Components/Homepage/NumberList";
import NoNumberList from "../Components/Homepage/NumberList/NoNumberList";
import TopDiv from "../Components/Homepage/TopDiv";

export default function Home({ data, indexData }) {
  const [showShareList, setShowShareList] = useState(false)

  return (
    <>
      <Head>
        <title>{indexData ? indexData?.website_title : 'Demo text'}</title>
        <meta name="description" content={indexData ? indexData?.meta_description : 'Demo description'} />
        <meta name="keywords" content={indexData ? indexData?.keywords : "keywords list"} />
        <link rel="icon" href="/image/favicon_free-number-logo.png" />
      </Head>
      <main style={{ minWidth: "18rem", maxWidth: "100vw" }}>
        <section
          id="top_div"
          style={{ minHeight: "35vh" }}
          className="text-light text-center d-flex justify-content-center align-items-center"
        >
          <div id="tob_div_bg_img"
            style={{
              position: "absolute",
              height: "35vh",
              minWidth: "18rem",
              width: "100%",
              overflow: "hidden",
              zIndex: -1
            }}
          >
            <Image
              src="/image/top_div_cover_photo.jpg"
              alt="top_div_bg_img"
              objectFit="cover"
              layout="fill"
              // sizes="(min-width: 75em) 33vw,
              // (min-width: 48em) 50vw,
              // 100vw"
              quality={50}
            />
          </div>
          <TopDiv />
        </section>

        <section id="numberList">
          {data?.count < 1 && <NoNumberList className="container" />}
          {data?.count > 0 && (
            <NumberList value={data.items} className="container" />
          )}
        </section>
        <div className="social-share">
          <div className="icon-container">
            {/* facebook  */}
            <FacebookShareButton
              url={"https://github.com/next-share"}
              quote={
                "next-share is a social share buttons for your next React apps."
              }
              hashtag={"#nextshare"}
            >
              <FacebookIcon size={38} />
            </FacebookShareButton>
            {/* Twitter */}
            <TwitterShareButton
              url={"https://github.com/next-share"}
              title={
                "next-share is a social share buttons for your next React apps."
              }
            >
              <TwitterIcon size={38} />
            </TwitterShareButton>
            {/* telegram  */}
            <TelegramShareButton
              url={"https://github.com/next-share"}
              title={
                "next-share is a social share buttons for your next React apps."
              }
            >
              <TelegramIcon size={38} />
            </TelegramShareButton>
            <div>
              <span onClick={() => setShowShareList(true)}><Image src="/image/more.png" alt="" height={38} width="40vw" /></span>
            </div>
            {
              showShareList &&
              <>
                <Modal show={showShareList} onHide={() => setShowShareList(false)} animation={true} centered >
                  <Modal.Header closeButton>
                    <Modal.Title className="m-auto" >Share with your friend's</Modal.Title>
                  </Modal.Header>
                  <Modal.Body >
                    <Row className="text-center">
                      <Col>
                        {/* facebook  */}
                        <FacebookShareButton
                          url={"https://github.com/next-share"}
                          quote={
                            "next-share is a social share buttons for your next React apps."
                          }
                          hashtag={"#nextshare"}
                        >
                          <FacebookIcon size={42} className="m-2" round />
                        </FacebookShareButton>
                      </Col>
                      <Col>
                        {/* Twitter */}
                        <TwitterShareButton
                          url={"https://github.com/next-share"}
                          title={
                            "next-share is a social share buttons for your next React apps."
                          }
                          hashtags={"#nextshare"}
                        >
                          <TwitterIcon size={42} className="m-2" round />
                        </TwitterShareButton>
                      </Col>
                      <Col>
                        {/* telegram  */}
                        <TelegramShareButton
                          url={"https://github.com/next-share"}
                          title={
                            "next-share is a social share buttons for your next React apps."
                          }
                        >
                          <TelegramIcon size={42} className="m-2" round />
                        </TelegramShareButton>
                      </Col>
                      <Col>
                        <PinterestShareButton
                          url={'https://github.com/next-share'}
                          media={'next-share is a social share buttons for your next React apps.'}
                        >
                          <PinterestIcon size={42} className="m-2" round />
                        </PinterestShareButton>
                      </Col>
                      <Col>
                        <RedditShareButton
                          url={'https://github.com/next-share'}
                          title={'next-share is a social share buttons for your next React apps.'}
                        >
                          <RedditIcon size={42} className="m-2" round />
                        </RedditShareButton>
                      </Col>
                      <Col>
                        <LinkedinShareButton url={'https://github.com/next-share'} title={""}>
                          <LinkedinIcon size={42} className="m-2" round />
                        </LinkedinShareButton>
                      </Col>
                      <Col>
                        <FacebookMessengerShareButton
                          url={'https://github.com/next-share'}
                          title={""}
                          appId={''}
                        >
                          <FacebookMessengerIcon size={42} className="m-2" round />
                        </FacebookMessengerShareButton>
                      </Col>
                      <Col>
                        <EmailShareButton
                          url={'https://github.com/next-share'}
                          title={""}
                          subject={'Next Share'}
                          body="body"
                        >
                          <EmailIcon size={42} className="m-2" round />
                        </EmailShareButton>
                      </Col>
                      <Col>
                        <VKShareButton
                          url={'https://github.com/next-share'}
                          title=""
                        // image={'./next-share.png'}
                        >
                          <VKIcon size={42} className="m-2" round />
                        </VKShareButton>
                      </Col>
                    </Row>
                  </Modal.Body>
                  {/* <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowShareList(false)}>
                      Close
                    </Button>
                  </Modal.Footer> */}
                </Modal>
              </>
            }
          </div>
        </div>


        <section id="footer_section" className="mt-4 p-3 text-dark">
          <FooterTop />
          <FooterBottom />
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps() {

  const indexDataReq = await fetch('https://test-api.ataur.dev/index-data')
  const indexData = await indexDataReq.json()
  const result = await fetch(`https://numbers.messagebird.com/v1/phone-numbers`, {
    method: "get",
    headers: {
      'Authorization': 'AccessKey XM7Qv4P6xzebLjyNueNHahiu0'
    }
  });
  const value = await result.json();



  return {
    props: {
      data: value,
      indexData: indexData.success ? indexData.data : null
    },
  };
}
