import { useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navigation.scss";

const NavBar = () => {
    const location = useLocation();
    return (
        <Navbar expand="md" fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    <span className="logo">
                        <span className="logo-t">T</span>
                        <span className="logo-s">|</span>
                        <span className="logo-k">K</span>
                    </span>
                    <span className="name">Tonya Kheyfets, CPA</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav activeKey={location.pathname} className="justify-content-center m-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/resources">Resources</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
