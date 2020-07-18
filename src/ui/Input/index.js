import React from "react";
import "./style.css";

const Input = ({ props }) => {
  return <input placeholder="Введите текст" type="text" {...props} />;
};

export default Input;
