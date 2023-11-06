import React, { useState, useEffect } from "react";
import { CheckBoxElementsForMultiple } from "../../../Utiles/CustomeElements/Html Element/MultiChekBox";

export default function multiChekbox() {
  // Multiple Chek Box
  const initialCheckboxes = [
    { value: "Option 1", checked: false },
    { value: "Option 2", checked: false },
    { value: "Option 3", checked: false },
  ];

  // Render The check Box
  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);
  const [chekedValues, setchekedValues] = useState([]);

  const handleMultipleCheckboxChange = (value) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.value === value) {
        return { ...checkbox, checked: !checkbox.checked };
      }
      return checkbox;
    });
    setCheckboxes(updatedCheckboxes);

    // Update the checked values
    const updatedCheckedValues = updatedCheckboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    setchekedValues(updatedCheckedValues);
  };
  console.log(chekedValues);
  return (
    <>
      <div>
        <div
          style={{
            margin: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {checkboxes.map((checkbox) => (
            <CheckBoxElementsForMultiple
              key={checkbox.value}
              checkboxValue={checkbox.value}
              isChecked={checkbox.checked}
              handleCheckboxChange={handleMultipleCheckboxChange}
            />
          ))}
        </div>
      </div>
    </>
  );
}
