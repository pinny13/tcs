import { Container, Row, Col } from "react-bootstrap";
import Page from "../common/page";

import "./contact.scss";

const ContactPage = () => {
    return (
        <Page>
            <Container className="contact-page d-flex justify-content-left">
                <div className="contact-page-content">
                    <Row lg={2} xs={1}>
                        <Col className="d-flex justify-content-center">
                            <iframe
                                title="Redmond"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.7580549675245!2d-122.09696030810326!3d47.66969638213228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549072c0fb66e12b%3A0xf48c2f8f9903276c!2s7241%20185th%20Ave%20NE%20%23993%2C%20Redmond%2C%20WA%2098052!5e0!3m2!1sen!2sus!4v1626240083028!5m2!1sen!2sus"
                                width="400"
                                height="300"
                                loading="lazy"></iframe>
                        </Col>
                        <Col>
                            <h4>Our location:</h4>
                            <h4>
                                <a href="https://goo.gl/maps/TVT6PnbbmAhkJSkb6" target="_blank" rel="noreferrer">
                                    P.O. Box 993
                                    <br />
                                    Redmond, WA 98073
                                </a>
                            </h4>
                            <h4>Email us:</h4>
                            <h4>
                                <a href="mailto:tonyacpaservices@gmail.com">tonyacpaservices@gmail.com</a>
                            </h4>
                            <h4>Give us a call:</h4>
                            <h4>
                                <h5>
                                    Office: <a href="tel:425-470-3767">(425) 470-3767</a>
                                </h5>
                                <h5>
                                    Cell: <a href="tel:224-578-4352">(224) 578-4352</a>
                                </h5>
                            </h4>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Page>
    );
};

export default ContactPage;
