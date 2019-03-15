import React from "react";

const Bootcampers = props => {
  return (
    <div>
      <div>
        <div className="leftTopBox" />
        <div className="rightTopBox" />
        {props.name}
        {props.id}
      </div>
      <button onClick={props.handleClick}>Click me</button>
    </div>
  );
};

export default Bootcampers;
