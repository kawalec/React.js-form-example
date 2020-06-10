import React from "react";
import "./Input.scss";

const Input = (props) => {
  console.log(props.error.status);
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
        {props.error.status && (
          <div className="inputs__errors">{props.error.message}</div>
        )}
      </div>
    </>
  );
};

export default Input;
