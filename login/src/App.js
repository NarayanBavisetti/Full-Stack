import { createContext, useContext, useState } from "react";
//import { Route, Router, Switch } from "react-router";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Spam from "./components/spam";
import Home from "./home";
import Login from "./login";

let UserContext = createContext();

function App() {
const [user, setUser] = useState();

  return (
    <Router>
    <UserContext.Provider value={{ user, setUser }}>
    
        <Switch>
      <div className="App">
        <Route exact path="/spam">
        <Spam />
        </Route>
        <Route exact path="/about">
        <About />
        </Route>
       
        <Login />
        <Home />
      </div>
      </Switch>
  
    </UserContext.Provider>
    </Router>
  );
}

export  {App,UserContext};
