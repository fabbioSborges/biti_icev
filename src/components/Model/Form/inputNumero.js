import React, { useEffect, useRef } from "react";
import InputMask from "react-input-mask";
import { useField } from "@unform/core";
import "./input.css";

const Input = ({ children, name, props, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <InputMask
      mask="(99) 99999-9999"
      ref={inputRef}
      {...rest}
      className="input"
    />
  );
  /*  <input ref={inputRef} {...rest} className="input"></input>; */
};

export default Input;
