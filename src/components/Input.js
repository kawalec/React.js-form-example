import React from "react";
import "./Input.scss";

const Input = (props) => {
  return (
    <>
      <div className="inputs__block">
        <label htmlFor={props.id} className="inputs__label">
          {props.label}
        </label>
        <input
          className="inputs__item"
          type={props.type}
          name={props.name}
          value={props.value}
          checked={props.value}
          onChange={props.handleChange}
        ></input>

        <div className="inputs__errors">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
      </div>
    </>
  );
};

export default Input;
