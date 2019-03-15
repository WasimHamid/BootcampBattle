import React, { Component } from "react";
import "../App";
import Header from "../Header";
import Bootcampers from "../Bootcampers";
import Timer from "../Timer";
import Topic from "../Topic";

class App extends Component {
  render() {
    return (
      <div className="outside">
        <Header name="Bootcamper Bullshit Battle" />
        <Bootcampers />
        <Timer />
        <Topic />
      </div>
    );
  }
}
export default App;
