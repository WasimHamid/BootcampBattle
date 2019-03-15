import React, { Component } from "react";
import "../App";
// import Header from "../Header";
import Bootcampers from "../Bootcampers";
import bootcampers from "../../data/bootcampers";
import statements from "../../data/statements";

// const bootcamp = findUserById(4);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBootcamper1: null,
      selectedBootcamper2: null
    };
  }

  handleClick = bootcamper => {
    const availableBootcampers = bootcampers.filter(
      bc =>
        bc.name !== this.state.selectedBootcamper1 &&
        bc.name !== this.state.selectedBootcamper2
    );
    const randNum = Math.floor(Math.random() * availableBootcampers.length);
    console.log(availableBootcampers);
    var rand = availableBootcampers[randNum];
    console.log(rand.name);
    this.setState(() => ({ [bootcamper]: rand.name }));
  };

  render() {
    return (
      <>
        <Bootcampers
          handleClick={() => this.handleClick("selectedBootcamper1")}
          name={this.state.selectedBootcamper1}
          id={bootcampers.id}
        />
        <Bootcampers
          handleClick={() => this.handleClick("selectedBootcamper2")}
          name={this.state.selectedBootcamper2}
          id={bootcampers.id}
        />
      </>
    );
  }
}
export default App;
