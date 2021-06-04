import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import "../styles/index.css";
import Detail from "./Detail";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/detail/:id" exact component={Detail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

// Firebase Link : https://disneyplus-clone-487a1.web.app/
