import React from "react";

const Header = ({ name }) => {
  return (
    <div className="nav">
      <h2>{name}</h2>
    </div>
  );
};

export default Header;
