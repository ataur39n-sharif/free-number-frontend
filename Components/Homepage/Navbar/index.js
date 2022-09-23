import { Container, Nav, Navbar } from "react-bootstrap"

const NavBar = () => {
    return (
        <Navbar expand={'md'} style={{ minWidth: '18rem', zIndex: "99" }} bg="dark" variant="dark">
            {/* <Container> */}
            {/* <Navbar.Brand href="/">Temp-number</Navbar.Brand> */}
            <Navbar.Brand href="/"><img className="ms-4" src="/image/free-number-logo.png" alt="" style={{ height: "38px" }} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-3" />
            <Navbar.Collapse id="responsive-navbar-nav" className="ms-4 me-4">
                <Nav className="ms-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/countries/united-states">USA</Nav.Link>
                    <Nav.Link href="/countries/canada">Canada</Nav.Link>
                    <Nav.Link href="/countries/sweden">Sweden</Nav.Link>
                    <Nav.Link href="/countries/australia">Australia</Nav.Link>
                    <Nav.Link href="/all-countries">All Countries</Nav.Link>
                    <Nav.Link href="/inactive-numbers">Inactive numbers</Nav.Link>
                    {/* <Nav.Link href="/contact-us">Contact us</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
    )
}

export default NavBar