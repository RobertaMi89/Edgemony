import React from "react";

const Button = ({ value, onClick }) => {
  return (
    <button className="calculator-button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Button;
