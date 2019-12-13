import React, { Component } from "react";
import Card from "./components/card";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Card name="Rob" cherishPoints="10" clams="5" />
        <Card name="Rob" cherishPoints="10" clams="5" />
        <Card name="Rob" cherishPoints="10" clams="5" />
        <Card name="Rob" cherishPoints="10" clams="5" />
      </div>
    );
  }
}

export default App;
