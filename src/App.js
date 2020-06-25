import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home.js";
import Rooms from "./pages/Rooms.js";
import SingleRoom from "./pages/SingleRoom.js";
import Error from "./pages/Error.js";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
