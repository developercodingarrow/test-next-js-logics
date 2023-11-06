import React, { useState } from "react";
import styles from "../css/SinglecheckBoxElements.module.css";

export function CheckBoxElementsForSingle(props) {
  const { chekBoxStatus, handleCheckboxChange } = props;

  const handleCheckbox = () => {
    handleCheckboxChange();
    console.log(chekBoxStatus);
  };
  return (
    <>
      <div>
        <label className={styles.customCheckbox}>
          <input
            type="checkbox"
            checked={chekBoxStatus}
            onChange={handleCheckbox}
            className={styles.checkboxInput}
          />
          <div
            className={`${styles.checkbox} ${
              chekBoxStatus ? styles.checked : ""
            }`}
          >
            {chekBoxStatus && (
              <span className={styles.checkmark}>&#10003;</span>
            )}
          </div>
          <div
            className={`${styles.checkBox_optionLable} ${
              chekBoxStatus ? styles.cheked_optionLable : ""
            }`}
          >
            option 1
          </div>
        </label>
      </div>
    </>
  );
}
