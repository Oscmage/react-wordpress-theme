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
    }

    html,body,#root,.App {
        height: 100%;
        width: 100%;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
`;

ReactDOM.render(<App />, document.getElementById("root"));
