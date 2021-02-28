import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { NavBar } from "./navigation";
import { Loader } from "./common";

const HomePage = lazy(() => import("./home"));
const ServicesPage = lazy(() => import("./services"));
const AboutPage = lazy(() => import("./about"));
const ResourcesPage = lazy(() => import("./resources"));
const ContactPage = lazy(() => import("./contact"));
const Error404Page = lazy(() => import("./common/error404Page"));
// const SoonPage = lazy(() => import("./common/SoonPage"));

function App() {
    return (
        <Router>
            <NavBar />
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/services" component={ServicesPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/resources" component={ResourcesPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={Error404Page} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
