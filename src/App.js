import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const FreshPage = () => (
  <div>
    <h1>FRESH</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/fresh" component={FreshPage} />
      </Switch>
    </div>
  );
}

export default App;
