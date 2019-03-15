import React from "react";

const Topic = props => {
  return (
    <div className="BottomBox">
      <div>{props.statement}</div>
      <div>
        <button onClick={props.randomStatement}>Click me</button>
      </div>
    </div>
  );
};

export default Topic;
