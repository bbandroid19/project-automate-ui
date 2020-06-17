import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LogIn from "../layout/login";
import Dashboard from "../layout/dashboard";
import Projects from "../layout/project";

function Routing() {
  return (
    <BrowserRouter>
      <div className="routes">
        <Route exact path="/" component={LogIn} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/project" component={Projects} />
      </div>
    </BrowserRouter>
  );
}

export default Routing;
