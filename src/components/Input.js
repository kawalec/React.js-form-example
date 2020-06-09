import React from "react";
import "./Input.scss";

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      ></input>
    </>
  );
};

export default Input;
