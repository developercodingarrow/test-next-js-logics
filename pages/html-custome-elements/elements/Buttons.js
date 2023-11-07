import React from "react";
import ButtonElements from "../../../Utiles/CustomeElements/Html Element/ButtonElements";

export default function Buttons() {
  const handleButtonClick = () => {
    // Handle button click event here
    alert("Button clicked!");
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
        <ButtonElements
          label="Click Me"
          onClick={handleButtonClick}
          btnDesign={"flatButton"}
        />
      </div>
    </>
  );
}
