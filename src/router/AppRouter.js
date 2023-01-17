import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "../components/Summary/Summary";
import UserForm from "../components/Home/Home";
import Plan from "../components/Plan/Plan";

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route component={UserForm} path="/" exact={true} />
        <Route component={Details} path="/details" />
        <Route component={Plan} path="/plan" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
