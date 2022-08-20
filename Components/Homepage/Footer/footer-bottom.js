import { Card, Col, Row } from "react-bootstrap"
import CountUp from 'react-countup';


const FooterBottom = () => {
    return (
        <div className="container text-center mt-5 border border-dark" >
            <Row className="m-3">
                <Col md={4} sm={4} >
                    <div>
                        <strong style={{ fontSize: "xxx-large" }}><CountUp start={0} delay={1} end={49} /></strong>
                        <p>+Countries</p>
                    </div>
                </Col>
                <Col md={4} sm={4}>
                    <div>
                        <strong style={{ fontSize: "xxx-large" }}><CountUp start={0} delay={1} end={300} /></strong>
                        <p>+Phone Numbers</p>
                    </div>
                </Col>
                <Col md={4} sm={4}>
                    <div>
                        <strong style={{ fontSize: "xxx-large" }}><CountUp start={0} delay={1} end={42000} /></strong>
                        <p>+Text Messages</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FooterBottom