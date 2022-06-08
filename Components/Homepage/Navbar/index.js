import { Container, Nav, Navbar } from "react-bootstrap"

const NavBar = () => {
    return (
        <Navbar expand={'sm'} style={{ minWidth: '18rem' }} bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Temp-number</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/number">Number</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar