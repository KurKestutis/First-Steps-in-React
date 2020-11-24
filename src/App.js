import React, { Component } from "react";
import {NameExport} from "./mistakes/NamedExport"
import {Counter} from "./mistakes/Counter2"
import {Name} from "./mistakes/Name"


import "./App.css";

import Labas from "./components/Labas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Labas name="Kestuti" />
        <NameExport/>
        <br/>
        <Counter/>
        <Name/>
      </div>
    );
  }
}

export default App;
