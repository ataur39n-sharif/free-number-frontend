import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import FooterBottom from "../Components/Homepage/Footer/footer-bottom";
import FooterTop from "../Components/Homepage/Footer/footer-top";
import NumberList from "../Components/Homepage/NumberList";
import NoNumberList from "../Components/Homepage/NumberList/NoNumberList";
import TopDiv from "../Components/Homepage/TopDiv";
import FacebookComponent from "../Components/SocialMedia/Facebook.social";
import LinkedinComponent from "../Components/SocialMedia/Linkedin.social";
import MailComponent from "../Components/SocialMedia/Mail.social";
import MessengerComponent from "../Components/SocialMedia/Messenger.social";
import PinterestComponent from "../Components/SocialMedia/Pinterest.social";
import RedditComponent from "../Components/SocialMedia/Reddit.social";
import TelegramComponent from "../Components/SocialMedia/Teletegram.social";
import TwitterComponent from "../Components/SocialMedia/Twitter.social";
import VkshareComponent from "../Components/SocialMedia/Vkshare.social";

export default function Home({ numberList, indexData, socialMedia, homeBlog }) {
  const [showShareList, setShowShareList] = useState(false)
  // console.log(data)
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
              src="/image/sms_bg.jpg"
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
          {numberList?.length < 1 && <NoNumberList className="container" />}
          {numberList?.length > 0 && (
            <NumberList value={numberList} className="container" />
          )}
        </section>
        <div className="social-share">
          <div className="icon-container">
            {/* facebook  */}
            {
              <FacebookComponent data={socialMedia.find((eachData) => eachData?.media_name === 'fb')} shape={false} />
            }

            {/* Twitter */}
            {
              <TwitterComponent data={socialMedia.find((eachData) => eachData?.media_name === 'twitter')} shape={false} />
            }
            {/* telegram  */}
            {
              <TelegramComponent data={socialMedia.find((eachData) => eachData?.media_name === 'telegram')} shape={false} />
            }
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
                      <Col xs="auto" sm={2} md={4}>
                        {/* facebook  */}
                        {
                          <FacebookComponent data={socialMedia.find((eachData) => eachData?.media_name === 'fb')} shape={true} />
                        }
                      </Col>
                      <Col xs="auto" sm={2} md={4}>
                        {/* Twitter */}
                        {
                          <TwitterComponent data={socialMedia.find((eachData) => eachData?.media_name === 'twitter')} shape={true} />
                        }
                      </Col>
                      <Col xs="auto" sm={2} md={4}>
                        {/* telegram  */}
                        {
                          <TelegramComponent data={socialMedia.find((eachData) => eachData?.media_name === 'telegram')} shape={true} />
                        }
                      </Col>
                      <Col xs="auto" sm={2} md={4}>
                        <PinterestComponent data={socialMedia.find((eachData) => eachData?.media_name === 'pinterest')} />
                      </Col>
                      <Col xs="auto" sm={2} md={4}>
                        {
                          <RedditComponent data={socialMedia.find((eachData) => eachData?.media_name === 'reddit')} />
                        }
                      </Col>
                      <Col xs="auto" sm={2} md={4}>
                        {
                          <LinkedinComponent data={socialMedia.find((eachData) => eachData?.media_name === 'linkedin')} />
                        }
                      </Col>
                      <Col xs="auto" sm={2} md={4}>
                        {
                          <MessengerComponent data={socialMedia.find((eachData) => eachData?.media_name === 'messenger')} />
                        }
                      </Col>
                      <Col xs="auto" sm={2} md={4}>
                        {
                          <MailComponent data={socialMedia.find((eachData) => eachData?.media_name === 'mail')} />
                        }
                      </Col>
                      <Col xs="auto" sm={2} md={4}>
                        {
                          <VkshareComponent data={socialMedia.find((eachData) => eachData?.media_name === 'vkShare')} />
                        }
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
          <FooterTop blog={homeBlog} />
          <FooterBottom />
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps() {

  const indexDataReq = await fetch('https://real-jade-chimpanzee-vest.cyclic.app/index-data')
  const indexData = await indexDataReq.json()

  const socialMediaReq = await fetch('https://real-jade-chimpanzee-vest.cyclic.app/all-social-media')
  const socialMedia = await socialMediaReq.json()

  // const result = await fetch(`https://numbers.messagebird.com/v1/phone-numbers?limit=100`, {
  //   method: "get",
  //   headers: {
  //     'Authorization': 'AccessKey XM7Qv4P6xzebLjyNueNHahiu0'
  //   }
  // });
  // const value = await result.json();
  const res = await fetch('https://real-jade-chimpanzee-vest.cyclic.app/number/list')
  const response = await res.json()
  const value = response.success && response?.list?.filter((eachNumber) => eachNumber.status === 'active')

  const hBlog = await fetch('https://real-jade-chimpanzee-vest.cyclic.app/blog/homepage_blog')
  const homeBlogRes = await hBlog.json()


  return {
    props: {
      numberList: value,
      indexData: indexData.success ? indexData.data : null,
      socialMedia: socialMedia.success ? socialMedia.data : null,
      homeBlog: homeBlogRes.success ? homeBlogRes.blog : null
    },
  };
}
