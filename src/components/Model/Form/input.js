import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import "./input.css";

const Input = ({ children, name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return <textarea ref={inputRef} {...rest} className="input"></textarea>;
  {
    /* <input ref={inputRef} {...rest} className="input"></input>; */
  }
};

export default Input;
