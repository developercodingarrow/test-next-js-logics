import React from "react";

export default function SaranshFormInput(props) {
  const { lable, error, id, inputClassName, labelClassName, ...inputProps } =
    props;

  console.log(error); // this eror show undefined in console
  return (
    <div>
      <label className={labelClassName}>{lable}</label>
      <input className={inputClassName} {...inputProps} />
    </div>
  );
}
