import React, { Component } from "react";
import {NameExport} from "./mistakes/NamedExport"

import "./App.css";

import Labas from "./components/Labas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Labas name="Kestuti" />
        <NameExport/>
      </div>
    );
  }
}

export default App;
