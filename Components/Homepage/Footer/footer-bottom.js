import { Card, Col, Row } from "react-bootstrap"

const FooterBottom = () => {
    return (
        <div className="container text-center mt-4">
            <h5>Look at the reasons for choosing us</h5>
            <p>We think for you more, everything is to better meet your needs, everything is for a better user experience.</p>
            <Row>
                <Col md={6} sm={12}>
                    <Card border="light">
                        <Card.Body>
                            {/* <Card.Title>Receive SMS</Card.Title> */}
                            <Card.Text>
                                Keep adding new numbers - we add new numbers every week for your convenience.The virtual numbers displayed are temporary and disposable with completely new ones provisioned on a regular basis.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} sm={12}>
                    <Card border="light">
                        <Card.Body>
                            {/* <Card.Title>Private</Card.Title> */}
                            <Card.Text>
                                Not only to receive text messages - we also offer a free SMS delivery service, you can send text messages to the US and Canada free of charge on our website.We promise to send text messages is completely free.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} sm={12}>
                    <Card border="light">
                        <Card.Body>
                            {/* <Card.Title>Free</Card.Title> */}
                            <Card.Text>
                                Ultra-fast receiving speed - We understand that the most important thing in the Internet era is speed. Whether it is SMS receiving or SMS sending, we provide a fast and efficient solution. In the case of guaranteed delivery, we are committed to higher speed. Sending ability.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} sm={12}>
                    <Card border="light">
                        <Card.Body>
                            {/* <Card.Title>Temporary</Card.Title> */}
                            <Card.Text>
                                Perfect data support - Verify Facebook, Twitter, Google, and many more. All our numbers can receive messages globally even if the sender is in a different country.If you require free online service in a country not currently being listed, please check back later as we continuously add new locations and numbers.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default FooterBottom