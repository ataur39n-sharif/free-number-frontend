import { Card, Col, Row } from "react-bootstrap"

const FooterTop = ({ blog }) => {
    return (
        <div className="container text-center">
            <h3>{blog?.title}</h3>
            <p>{blog?.others?.sub_title}</p>
            <Row>
                <Col md={3} sm={12}>
                    <Card border="light">
                        <Card.Body>
                            <Card.Title>{blog?.others?.section1_title}</Card.Title>
                            <Card.Text>{blog?.others?.section1_description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={12}>
                    <Card border="light">
                        <Card.Body>
                            <Card.Title>{blog?.others?.section2_title}</Card.Title>
                            <Card.Text>{blog?.others?.section2_description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={12}>
                    <Card border="light">
                        <Card.Body>
                            <Card.Title>{blog?.others?.section3_title}</Card.Title>
                            <Card.Text>{blog?.others?.section3_description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={12}>
                    <Card border="light">
                        <Card.Body>
                            <Card.Title>{blog?.others?.section4_title}</Card.Title>
                            <Card.Text>{blog?.others?.section4_description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default FooterTop