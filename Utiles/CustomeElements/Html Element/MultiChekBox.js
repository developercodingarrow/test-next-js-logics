import React from "react";
import styles from "../css/multiCheckBoxElement.module.css";

export function CheckBoxElementsForMultiple(props) {
  const { checkboxValue, isChecked, handleCheckboxChange } = props;

  const handleCheckbox = () => {
    handleCheckboxChange(checkboxValue);
    // console.log(checkboxValue);
  };
  return (
    <>
      <div>
        <label className={styles.customCheckbox}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckbox}
            className={styles.checkboxInput}
          />
          <div
            className={`${styles.checkbox} ${isChecked ? styles.checked : ""}`}
          >
            {isChecked && <span className={styles.checkmark}>&#10003;</span>}
          </div>
          <div
            className={`${styles.checkBox_optionLabel} ${
              isChecked ? styles.checked_optionLabel : ""
            }`}
          >
            {checkboxValue}
          </div>
        </label>
      </div>
    </>
  );
}
