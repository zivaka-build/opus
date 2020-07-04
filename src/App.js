import React from "react";
import { Router } from "@reach/router";
// import "./assets/css/style.css";
import "./assets/css/bootstrap.css";
import "./assets/css/opus-style.css";

import Opus from "./components/Opus";
import Roshni from "./components/Roshni";

function App() {
    return (
        <Router>
            <Opus path="/" />
            <Roshni path="/roshni" />
        </Router>
    );
}

export default App;
