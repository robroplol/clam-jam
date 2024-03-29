import React, { Component } from "react";
import './card.css';

class Card extends Component {
  state = {
    clam: 0,
    cherishPoints: 0
  };

  clam = () => {
    this.setState({ clam: this.state.clam + 1 });
  };

  cherishPoint = () => {
    this.setState({ cherishPoints: this.state.cherishPoints + 1 });
  };

  render() {
    return (
      <div className="scorecard">
        <h2>{this.props.name}</h2>
        <h3>Cherish Points: {this.state.cherishPoints}</h3>
        <h3 >Clams: {this.state.clam}</h3>
        <button className="btn btn-primary btn-block" onClick={this.cherishPoint}>Cherish Point</button>
        <button className="btn btn-danger btn-block" onClick={this.clam}>Clam</button>
      </div>
    );
  }
}

export default Card;
