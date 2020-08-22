import React from "react";
import { Router } from "@reach/router";
// import "./assets/css/style.css";
import "./assets/css/bootstrap.css";
import "./assets/css/opus-style.css";

import Opus from "./components/Opus";
import Roshni from "./components/Roshni";
import Metr from "./components/Metr";
import Aashakiran from "./components/Aashakiran";
import AboutUs from "./components/AboutUs";
import MediaCenter from "./components/MediaCentre";
import SingleBlogPage from "./components/SingleBlogPage";
import Pragati from "./components/Pragati";
import Contact from "./components/Contact";
import CP from "./components/cp";
import MS from "./components/ms"
import Roshnicp from "./components/Roshnicp"
import Metrcp from "./components/Metrcp"
import Aashakirancp from "./components/Aashakirancp"
import Pragaticp from "./components/Pragaticp"
import Roshnims from "./components/Roshnims"
import Metrms from "./components/Metrms"
import Aashakiranms from "./components/Aashakiranms"
import Pragatims from "./components/Pragatims"
import Initiative from "./components/Initiative"
import TestimonialPage from "./components/TestimonialPage"

function App() {
    return (
        <Router>
            <Opus path="/" />
            <Roshni exact path="/roshni" />
            <Metr path="/metr" />
            <Aashakiran path="/aashakiran" />
            <AboutUs path="/about" />
            <TestimonialPage path="/testimonials" />
            <Contact path="/contact" />
            <Pragati path="/pragati" />
            <Initiative path="/initiative" />
            <CP path="/cp" />
            <Roshnicp path="/roshnicp" />
            <Metrcp path="/metrcp" />
            <Aashakirancp path="/aashakirancp" />
            <Pragaticp path="/pragaticp" />
            

            <MS path="/ms" />
            <Roshnims path="/roshnims" />
            <Metrms path="/metrms" />
            <Aashakiranms path="/aashakiranms" />
            <Pragatims path="/pragatims" />

            <MediaCenter path="/media" />
            <SingleBlogPage exact path="/blog/:blogId" />
        </Router>
    );
}

export default App;
