import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar, Footer } from "./navigation";
import { Loader, Urls } from "./common";
import HomePage from "./home";
import ServicesPage from "./services";
import AboutPage from "./about";
import ResourcesPage from "./resources";
import ContactPage from "./contact";
import { Error404 } from "./errors";

import "./App.scss";

/**
 * TODO:
 * - Error boundary
 * - Error pages
 * - gradual image load (home/other pages)
 */

function App() {
    return (
        <Router>
            <NavBar />
            <Suspense fallback={<Loader />}>
                <Switch>
                    {/* <Route component={SoonPage} /> */}
                    <Route exact path={Urls.Home} component={HomePage} />
                    <Route path={Urls.Services} component={ServicesPage} />
                    <Route path={Urls.About} component={AboutPage} />
                    <Route path={Urls.Resources} component={ResourcesPage} />
                    <Route path={Urls.Contact} component={ContactPage} />
                    <Route component={Error404} />
                </Switch>
            </Suspense>
            <Footer />
        </Router>
    );
}

export default App;
