import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./navigation.scss";

const Footer = () => {
    return (
        <Navbar expand="sm" fixed="bottom">
            <Container>
                <Navbar.Text>Copyright 2021</Navbar.Text>
            </Container>
        </Navbar>
    );
};

export default Footer;
