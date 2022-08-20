import { Container, Nav, Navbar } from "react-bootstrap"

const NavBar = () => {
    return (
        <Navbar expand={'md'} style={{ minWidth: '18rem', zIndex: "99" }} bg="dark" variant="dark">
            <Navbar.Brand href="/"><img className="ms-4" src="/image/free-number-logo.png" alt="" style={{height:"38px"}}/></Navbar.Brand>
            <Container>
                {/* <Navbar.Brand href="/">Temp-number</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/number-list/us">USA</Nav.Link>
                        <Nav.Link href="/number-list/uk">UK</Nav.Link>
                        <Nav.Link href="/number-list/ru">Russia</Nav.Link>
                        <Nav.Link href="/number-list/ca">Canada</Nav.Link>
                        <Nav.Link href="/number-list/fr">France</Nav.Link>
                        <Nav.Link href="/number-list/au">Australia</Nav.Link>
                        <Nav.Link href="/allcountries">All Countries</Nav.Link>
                        <Nav.Link href="/contact-us">Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar