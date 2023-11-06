import React, { useState, useEffect } from "react";
import { RadioButton } from "../../../Utiles/CustomeElements/Html Element/ReadioElements";

export default function CustomeRadio() {
  // Radio Button State
  const [selectedOption, setSelectedOption] = useState(null);

  // Radio Button Select handel Chnage
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  // Radio Optios
  const options = ["red 1", "green", "Yellow"];

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
        <RadioButton
          customRadio={"customRadio"}
          customRadioChecked={"customRadioChecked"}
          customRadioButtonContainer={"customRadioButtonContainer"}
          custome_radiolable={"custome_radiolable"}
          cheked_ladiolable={"custome_radiolableCheked"}
          options={options}
          handleOptionChange={handleOptionChange}
          selected={selectedOption}
        />
      </div>
    </>
  );
}
