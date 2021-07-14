import { Container } from "react-bootstrap";
import "./common.scss";

const Page: React.FC = props => {
    return (
        <div className="page">
            <div className="top-spacer" />
            <div className="img d-none d-sm-block" />
            <Container>{props.children}</Container>
            <div className="bottom-spacer" />
        </div>
    );
};

export default Page;
