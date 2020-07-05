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

function App() {
    return (
        <Router>
            <Opus path="/" />
            <Roshni path="/roshni" />
            <Metr path="/metr" />
            <Aashakiran path="/aashakiran" />
            <AboutUs path="/about" />
        </Router>
    );
}

export default App;
