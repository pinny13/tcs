import { Container, Button } from "react-bootstrap";
import { Urls } from "../common";
import Page from "../common/page";

const Error404 = () => {
    return (
        <Page>
            <Container className="d-flex justify-content-center">
                <h1>Oops!</h1>
                <h3>Page not found</h3>
                <Button variant="primary" size="lg" href={Urls.Home}>
                    Home
                </Button>
            </Container>
        </Page>
    );
};

export default Error404;
