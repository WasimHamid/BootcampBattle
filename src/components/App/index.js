import React, { Component } from "react";
import "../App";
import Header from "../Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="Bootcamper Bullshit Battle" />
        <div className="lside" />
        <div className="rside" />
      </div>
    );
  }
}
export default App;
