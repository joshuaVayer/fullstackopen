import React from "react";

const Button = ({text, onClick}) => (
  <div className="button-component">
    <button 
    className="button" 
    onClick={onClick}
    >
      {text}
    </button>
  </div>
)

export default Button;