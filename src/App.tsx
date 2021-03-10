import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar, Footer } from "./navigation";
import { Loader } from "./common";
import HomePage from "./home";
import ServicesPage from "./services";
import AboutPage from "./about";
import ResourcesPage from "./resources";
import ContactPage from "./contact";
import { Error404 } from "./common";

import "./App.scss";

/*
const HomePage = lazy(() => import("./home"));
const ServicesPage = lazy(() => import("./services"));
const AboutPage = lazy(() => import("./about"));
const ResourcesPage = lazy(() => import("./resources"));
const ContactPage = lazy(() => import("./contact"));
const Error404 = lazy(() => import("./common/error404Page"));
*/
const SoonPage = lazy(() => import("./SoonPage"));

/**
 * TODO:
 * - favicon.ico
 * - Error boundary
 * - footer
 */

function App() {
    return (
        <Router>
            {/* <NavBar /> */}
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route component={SoonPage} />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/services" component={ServicesPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/resources" component={ResourcesPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={Error404} />
                </Switch>
            </Suspense>
            {/* <Footer /> */}
        </Router>
    );
}

export default App;
