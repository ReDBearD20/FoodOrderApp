import classes from "./Input.module.css";
import React from "react";
const Input = React.forwardRef((props, ref) => {
  //need to wrap our function in forwardRef as for custom compo useRef doesnt work out of the box
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}> {props.label}</label>
      {/*make the input element configurable as we can select that it can be a text select textarea etc field */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
