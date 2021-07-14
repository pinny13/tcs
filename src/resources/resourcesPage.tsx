import { Container, Row, Col } from "react-bootstrap";
import { Page, ListCard, ListCardItem, ListCardItemType } from "../common";

const getUrlListItem = (text: string, url: string): ListCardItem => ({ type: ListCardItemType.Link, text, url });
const getInfoListItem = (title: string, text: string): ListCardItem => ({ type: ListCardItemType.Info, title, text });

const ResourcesPage = () => {
    return (
        <Page>
            <Container className="services-page">
                <Row lg={2} xs={1}>
                    <Col className="d-flex justify-content-center">
                        <ListCard
                            title="IRS Forms"
                            items={[
                                getUrlListItem("Form 1040", "https://www.irs.gov/pub/irs-pdf/f1040.pdf"),
                                getUrlListItem("1099-INT", "https://www.irs.gov/pub/irs-pdf/f1099int.pdf"),
                                getUrlListItem("Form W-2", "https://www.irs.gov/pub/irs-pdf/fw2.pdf"),
                                getUrlListItem("Form W-9", "https://www.irs.gov/pub/irs-pdf/fw9.pdf"),
                                getUrlListItem("Instructions for 1040", "https://www.irs.gov/pub/irs-pdf/i1040gi.pdf"),
                            ]}
                        />
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <ListCard
                            title="Tax Tips"
                            items={[
                                getUrlListItem(
                                    "Check Your Federal Refund Status",
                                    "https://sa.www4.irs.gov/irfof/lang/en/irfofgetstatus.jsp"
                                ),
                                getInfoListItem(
                                    "Amended Returns",
                                    "If you found error after your tax return has been filed. You may need to amend your return"
                                ),
                            ]}
                        />
                    </Col>
                </Row>
                <Row lg={2} xs={1}>
                    <Col className="d-flex justify-content-center">
                        <ListCard
                            title="Financial Tools"
                            items={[
                                getUrlListItem("Federal (IRS) Electronic Payment", "https://www.irs.gov/payments"),
                                getUrlListItem(
                                    "Federal (IRS) Installment Agreement for Individuals and Businesses",
                                    "https://www.irs.gov/payments/online-payment-agreement-application"
                                ),
                                getUrlListItem("Small Business Administration", "https://www.sba.gov/"),
                            ]}
                        />
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <ListCard
                            title="Important Dates 2021"
                            items={[
                                getInfoListItem("March 15", "Partnerships tax return are due"),
                                getInfoListItem("April 15", "Corporate tax returns are due"),
                                getInfoListItem("May 17", "Individual tax returns or extensions are due"),
                                getInfoListItem("September 15", "All business tx returns are due"),
                                getInfoListItem("October 15", "Extended individual tax return are due"),
                            ]}
                        />
                    </Col>
                </Row>
            </Container>
        </Page>
    );
};

export default ResourcesPage;
