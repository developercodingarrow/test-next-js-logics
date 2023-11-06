import React, { useState, useEffect } from "react";
import { CheckBoxElementsForSingle } from "../../../Utiles/CustomeElements/Html Element/CheckBoxElements";

export default function SingleCheckbox() {
  // Checked box
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };
  return (
    <>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CheckBoxElementsForSingle
          chekBoxStatus={isChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>
    </>
  );
}
