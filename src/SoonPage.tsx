import Jumbotron from "react-bootstrap/Jumbotron";
import "./variables.scss";

const SoonPage = () => {
    return (
        <div className="container container-table">
            <div className="row vertical-center-row">
                <div className="text-center col-md-12 col-md-offset-12">
                    <Jumbotron fluid style={{ color: "#8FC31F" }}>
                        <h1>The website is coming soon</h1>
                        <p>For now, please call {/*Tonya at*/} (425) 470-3767</p>
                    </Jumbotron>
                </div>
            </div>
        </div>
    );
};

export default SoonPage;
