import React from "react";

const Bootcampers = props => {
  return (
    <div>
      <div>
        <div className="leftTopBox">
          {props.name}
          <div>
            <button onClick={props.handleClick}>Click me</button>
          </div>
        </div>
        {/* <div className="rightTopBox" />
        {props.name}
        <button onClick={props.handleClick}>Click me</button> */}
      </div>
    </div>
  );
};

export default Bootcampers;
