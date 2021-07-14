import { Navbar, Container } from "react-bootstrap";
import "./navigation.scss";
import linkedInLogo from "../img/linkedin.svg";

const Footer = () => {
    return (
        <Navbar expand="md" fixed="bottom" className="footer">
            <script
                type="text/javascript"
                src="https://platform.linkedin.com/badges/js/profile.js"
                async
                defer></script>
            <Container>
                <Navbar.Text>&copy; Copyright {new Date().getFullYear()} Tonya CPA Services</Navbar.Text>
                {/* 
                <a
                    href="https://linkedin.com/in/tonya-kheyfets-cpa-60a76454"
                    target="_blank"
                    rel="noreferrer"
                    className="linkedin">
                    <img src={linkedInLogo} alt="linkedin" />
                </a> */}

                <Navbar.Text>
                    <a href="tel:425-470-3767">(425) 470-3767</a>
                </Navbar.Text>
            </Container>
        </Navbar>
    );
};

export default Footer;
