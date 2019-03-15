import React from "react";

const Bootcampers2 = props => {
  return (
    <div>
      <div>
        <div className="rightTopBox">
          {props.name}
          <div>
            <button onClick={props.handleClick}>Click me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootcampers2;
