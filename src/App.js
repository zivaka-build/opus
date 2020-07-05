import React from "react";
import { Router } from "@reach/router";
// import "./assets/css/style.css";
import "./assets/css/bootstrap.css";
import "./assets/css/opus-style.css";

import Opus from "./components/Opus";
import Roshni from "./components/Roshni";
import Metr from "./components/Metr";
import Ashakiran from "./components/Ashakiran";

function App() {
    return (
        <Router>
            <Opus path="/" />
            <Roshni path="/roshni" />
            <Metr path="/metr" />
            <Ashakiran path="/ashakiran" />
        </Router>
    );
}

export default App;
