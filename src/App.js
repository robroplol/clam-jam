import React, { Component } from "react";
import Card from "./components/card";
import Header from "./components/header";
import './App.css';

class App extends Component {
  state = {
    
  };
  render() {
    return (
      <div id="main-contain">
        <Header />
        <Card name="Rob" cherishPoints="0" clams="0" />
        <Card name="Carp" cherishPoints="0" clams="0" />
        <Card name="Spat" cherishPoints="0" clams="0" />
        <Card name="Mike" cherishPoints="0" clams="0" />
        <Card name="Marty" cherishPoints="0" clams="0" />
        <Card name="William" cherishPoints="0" clams="0" />
        <Card name="Snackpack" cherishPoints="0" clams="0" />
        <Card name="Moopy" cherishPoints="0" clams="0" />
      </div>
    );
  }
}

export default App;
