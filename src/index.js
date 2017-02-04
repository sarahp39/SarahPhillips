//general imports
import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory, IndexRoute} from "react-router";

//page imports
import App from "./App";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";

//routes and paths
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="Home" component={Home} />
        <Route path="Projects" component={Projects} />
        <Route path="Resume" component={Resume} />
        </Route>
    </Router>,
    document.getElementById("root")
);
