import React from "react";

const Header = ({ name }) => {
  return (
    <div className="nav">
      <h1>{name}</h1>
    </div>
  );
};

export default Header;
