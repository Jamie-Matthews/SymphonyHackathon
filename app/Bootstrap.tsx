import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

function initialize(): void {
    var appViewModel = {};

    ReactDOM.render(<App viewModel={appViewModel} />, document.getElementById("root"));
}

if (document.readyState === "complete") {
    initialize();
} else {
    document.addEventListener("DOMContentLoaded", initialize, false);
}
