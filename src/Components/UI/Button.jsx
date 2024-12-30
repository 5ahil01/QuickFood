import React from "react";

const Button = ({ children, textOnly, className = "", ...props }) => {
  let cssClasses = "";

  cssClasses += textOnly ? "text-sm" : "";
  cssClasses += className;

  return (
    <button className="border-2 border-blue-700" {...props}>
      {children}
    </button>
  );
};

export default Button;
