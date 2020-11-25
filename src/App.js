import React, { Component } from "react";
import { NameExport } from "./mistakes/NamedExport";
import { Counter } from "./mistakes/Counter2";
import { Name } from "./mistakes/Name";
import { AsyncSetState } from "./mistakes/AsyncSetState";
// import { ToDoList } from "./mistakes/ToDoList";
import { Parent } from "./mistakes/ParentChild";

import "./App.css";

import Labas from "./components/Labas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Labas name="Kestuti" />
        <NameExport />
        <br />
        <Counter />
        <Name />
        <br />
        <hr />
        <AsyncSetState />
        <br />
        <hr />
        {/* <ToDoList /> */}
        <br />
        <hr />
        <Parent />
      </div>
    );
  }
}

export default App;
