import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button className="form__submit-btn" onClick={props.click}>
      Zatwierdz
    </button>
  );
};

export default Button;
