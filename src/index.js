import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { injectGlobal } from "styled-components";
// eslint-disable-next-line
injectGlobal`
    *, *:before, *:after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding-bottom: 2rem;
    }
`;

ReactDOM.render(<App />, document.getElementById("root"));
