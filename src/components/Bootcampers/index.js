import React from "react";

const Bootcampers = props => {
  return (
    <div>
      <div>
        {props.name}
        {props.id}
      </div>
      <button onClick={props.handleClick}>Click me</button>
    </div>
  );
};

export default Bootcampers;
