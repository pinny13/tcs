import "./common.scss";
import { Container } from "react-bootstrap";

const Page: React.FC = props => {
    return (
        <div className="page">
            <div className="img d-none d-sm-block"></div>
            <Container>{props.children}</Container>
        </div>
    );
};

export default Page;
