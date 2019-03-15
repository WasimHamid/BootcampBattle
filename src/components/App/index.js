import React, { Component } from "react";
import "../App";

import Header from "../Header";
import Bootcampers from "../Bootcampers";
import Bootcampers2 from "../Bootcampers2";
import Timer from "../Timer";
import bootcampers from "../../data/bootcampers";
import statements from "../../data/statements";
import Topic from "../Topic";

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
  randomStatementClick = () => {
    var rand = Math.floor(Math.random() * statements.length);
    console.log(statements[rand].statement);
    this.setState(() => ({
      selectedStatement: statements[rand].statement
    }));
  };

  render() {
    return (
      <div className="outside">
        <Header name="Bootcamper Bullshit Battle" />
        <>
          <Bootcampers
            handleClick={() => this.handleClick("selectedBootcamper1")}
            name={this.state.selectedBootcamper1}
            id={bootcampers.id}
          />
          <Bootcampers2
            handleClick={() => this.handleClick("selectedBootcamper2")}
            name={this.state.selectedBootcamper2}
            id={bootcampers.id}
          />
        </>
        <Timer />
        <Topic
          randomStatement={() => this.randomStatementClick("selectedStatement")}
          statement={this.state.selectedStatement}
        />
      </div>
    );
  }
}
export default App;
