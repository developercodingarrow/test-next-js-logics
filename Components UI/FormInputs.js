import React from "react";
import styles from "../styles/form/formInput.module.css";

export default function FormInputs(props) {
  const { lable, onChnage, id, inputClassName, labelClassName, ...inputProps } =
    props;
  return (
    <div>
      <label className={labelClassName}>{lable}</label>
      <input className={inputClassName} {...inputProps} />
    </div>
  );
}
