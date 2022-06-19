import Link from "next/link"
import { Col, Row } from "react-bootstrap"

const Footer = () => {
    return (
        <footer className="text-center bg-dark text-light">
            {/* <span>All copyright reserved. </span>
            <Link href='/privacy'>Privacy & Terms</Link> */}
            <Row className="" style={{ maxWidth: "100%" }}>
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <span style={{ fontSize: "xx-large" }}>Free Online Number</span>
                </Col>
                <Col md={6}>
                    <div className="m-2">
                        <Link href='/allcountries'><span style={{ cursor: "pointer" }}>All Countries List</span></Link> -
                        <Link href='/blog'><span style={{ cursor: "pointer" }}> Blog</span></Link> -
                        <Link href='/privacy'><span style={{ cursor: "pointer" }}> Privacy Policy</span></Link> -
                        <Link href='/faqs'><span style={{ cursor: "pointer" }}> FAQs</span></Link> -
                        <Link href='/sitemap'><span style={{ cursor: "pointer" }}> SiteMap</span></Link> -
                        <Link href='/about-us'><span style={{ cursor: "pointer" }}> About Us</span></Link>
                        <p>Receive SMS Online, Free Online Phone Number, Receive SMS Free </p>
                    </div>
                    <p> © 2022 FreeOnlineNumber. All Rights Reserved.</p>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer