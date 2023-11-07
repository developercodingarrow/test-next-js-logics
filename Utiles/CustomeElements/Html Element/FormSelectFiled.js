import React, { useState } from "react";
import styles from "../css/form-select.module.css";

export default function FormSelectFiled({
  options,
  placeholder,
  onSelectChange,
  ...rest
}) {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    // If provided, call the onSelectChange prop to notify the parent component of the selection change
    if (onSelectChange) {
      onSelectChange(selectedValue);
    }
  };
  return (
    <div>
      <div>
        <div>
          {/* <select className={styles.select}>
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select> */}
          <select
            className={styles.select}
            onChange={handleSelectChange}
            value={selectedOption}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled selected>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
