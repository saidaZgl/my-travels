import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travels/>
      </div>
    );
  }
}

export default App;


/* <Travel
      destination="San Francisco"
      country="USA"
      image="https://media.routard.com/image/93/3/photo.1425933.w630.jpg"
      distance="9161 km"
    />

    <Travel
      destination="Tokyo"
      country="Japon"
      image="https://media.routard.com/image/39/5/tokyo.1484395.c1000x300.jpg"
      distance="9596 km"
    /> */

