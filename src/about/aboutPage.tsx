import { Container, Image } from "react-bootstrap";
import Page from "../common/page";

import "./about.scss";

const AboutPage = () => {
    return (
        <Page>
            <Container className="about-page d-flex justify-content-center">
                <div className="about-page-content">
                    <Image src={require(`../img/tonya.jpeg`).default} fluid rounded />
                    <h2> Tonya Kheyfets</h2>
                    <h5>CPA, MS (Tax)</h5>
                    <h6>Founder and President</h6>
                    <p>
                        Tonya (Antonina) Kheyfets is the Washington certified public accountant (CPA) with over 10 years
                        experience in the leading Pacific Northwest CPA firms and large corporations. She has a
                        bachelor’s degree in Business Management and Accounting from Seattle Pacific University and
                        master’s degree in Taxation from Golden Gate University. She is a member of American Institute
                        of Certified Public Accountants (AICPA) and Washington State Board of Accountancy (WSCPA).
                    </p>
                    <p>
                        Over her career as a tax preparer and consultant, she has managed a wide range of closely held
                        businesses and individuals from small sole proprietors to large real estate, construction,
                        manufacturing, and service companies. Tonya has extended experience with high-net-worth
                        individuals residing in different states over US and abroad. Tonya is specializing in stock
                        transactions, real estate, startups, and professional services.
                    </p>
                    <p>
                        Tonya has always strived for excellent service to her clients and consistently stays up to date
                        on tax laws by taking continued education and tax certifications. She has proved her service by
                        tax savings to her clients with extensive tax planning and tax strategies.
                    </p>
                    <p>
                        Outside of the office, Tonya enjoys outside activities with her husband, two sons and cheerful
                        poodle Audrey. She is passionate about travelling, cooking, and learning new hobbies.
                    </p>
                </div>
            </Container>
        </Page>
    );
};

export default AboutPage;
