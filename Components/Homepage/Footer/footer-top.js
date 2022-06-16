import { Card, Col, Row } from "react-bootstrap"

const FooterTop = () => {
    return (
        <div className="container text-center">
            <h3>We provide free SMS reception service</h3>
            <p>Our virtual phone numbers allow you to verify and register for various websites, absolutely free.</p>
            <Row>
                <Col md={3} sm={12}>
                    <Card style={{border:"none"}}>
                        <Card.Body>
                            <Card.Title>Receive SMS</Card.Title>
                            <Card.Text>
                                We receive SMS from all over the world to our phone numbers.All our numbers can receive messages globally even if the sender is in a different country.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={12}>
                    <Card style={{border:"none"}}>
                        <Card.Body>
                            <Card.Title>Private</Card.Title>
                            <Card.Text>
                                We understand that privacy is important and our service allows you to keep your contact information private while gaining access to online SMS activated services from these various companies.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={12}>
                    <Card style={{border:"none"}}>
                        <Card.Body>
                            <Card.Title>Free</Card.Title>
                            <Card.Text>
                                We strive to receive SMS online for free and without charging money for receiving SMS. Send as many messages as you like to activate accounts that otherwise require personal information to verify.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={12}>
                    <Card style={{border:"none"}}>
                        <Card.Body>
                            <Card.Title>Temporary</Card.Title>
                            <Card.Text>
                                Message are available within seconds of being received, just refresh the page to view. The virtual numbers displayed are temporary and disposable with completely new ones provisioned on a regular basis.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default FooterTop