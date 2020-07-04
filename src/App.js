import React from "react";
import { Router } from "@reach/router";
// import "./assets/css/style.css";
import "./assets/css/bootstrap.css";
import "./assets/css/opus-style.css";

import Opus from "./components/Opus";

function App() {
    return (
        <Router>
            <Opus path="/" />
        </Router>
    );
}

export default App;
