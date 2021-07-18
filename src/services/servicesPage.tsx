import { Container, Row, Col } from "react-bootstrap";
import { ListCard, ListCardItem, ListCardItemType, Page } from "../common";

const getListItem = (text: string): ListCardItem => ({ type: ListCardItemType.Text, text });

const ServicesPage = () => {
    return (
        <Page>
            <Container className="services-page">
                <Row lg={3} xs={1}>
                    <Col className="d-flex justify-content-center">
                        <ListCard
                            title="Tax services"
                            img="services1.jpg"
                            items={[
                                getListItem("Tax return preparation and compliance"),
                                getListItem("Tax and financial planning"),
                                getListItem("Assistance with IRS letters"),
                                getListItem("State and local taxes"),
                                getListItem("International tax compliance"),
                                getListItem("Tax credits"),
                            ]}
                        />
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <ListCard
                            title="Accounting"
                            img="services2.jpg"
                            items={[
                                getListItem("Financial reports"),
                                getListItem("Bank reconciliation"),
                                getListItem("QuickBooks&reg; assistance"),
                                getListItem("Budget forecasting"),
                                getListItem("Maintenance of fixed assets and depreciation schedules"),
                            ]}
                        />
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <ListCard
                            title="Small business"
                            img="services4.jpg"
                            items={[
                                getListItem("New Business Formation"),
                                getListItem("General ledger analysis"),
                                getListItem("Acquisitions and sales"),
                                getListItem("Special transactions consulting"),
                                getListItem("Ownership transtion"),
                            ]}
                        />
                    </Col>
                </Row>
            </Container>
        </Page>
    );
};

export default ServicesPage;
