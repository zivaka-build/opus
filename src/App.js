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

function App() {
    return (
        <Router>
            <Opus path="/" />
            <Roshni exact path="/roshni" />
            <Metr path="/metr" />
            <Aashakiran path="/aashakiran" />
            <AboutUs path="/about" />
            <Pragati path="/pragati" />
            <MediaCenter path="/media" />
            <SingleBlogPage exact path="/blog/:blogId" />
        </Router>
    );
}

export default App;
