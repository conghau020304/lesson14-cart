import React from "react";
import "./App.css";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import DemoFormik from "./components/DemoFormik";
import DemoAxios from "./components/DemoAxios";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-inverse">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/demo-formik">DemoFormik</Link>
            </li>
            <li>
              <Link to="/demo-axios">DemoAxios</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/demo-formik">
            <DemoFormik />
          </Route>
          <Route path="/demo-axios">
            <DemoAxios />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
