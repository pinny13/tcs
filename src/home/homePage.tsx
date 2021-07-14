import { Container, Row, Col, Button, Jumbotron } from "react-bootstrap";
import { Urls } from "../common";
import "./homePage.scss";

const HomePage = () => {
    return (
        <Container fluid className="home-page px-0">
            <div className="home-page-container">
                <div className="bg-image" />
                <Container className="home-page-content" fluid>
                    <Jumbotron>
                        <h1 className="text-center text1">Tax and Accounting Services</h1>
                        <h2 className="text-center text2">Specializing in Small Business and Personal Income taxes</h2>
                    </Jumbotron>

                    <Container fluid="md">
                        <Row md={3} xs={1}>
                            <Col className="d-flex justify-content-center">
                                <Button variant="primary" size="lg" href={Urls.Services}>
                                    What we do
                                </Button>
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <Button variant="primary" size="lg" href={Urls.About}>
                                    Who we are
                                </Button>
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <Button variant="primary" size="lg" href={Urls.Contact}>
                                    Talk to us
                                </Button>
                            </Col>
                        </Row>
                        <div className="spacer" />
                    </Container>
                </Container>
            </div>
        </Container>
    );
};

export default HomePage;
