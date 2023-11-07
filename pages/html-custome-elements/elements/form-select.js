import React, { useState } from "react";
import FormSelectFiled from "../../../Utiles/CustomeElements/Html Element/FormSelectFiled";

export default function FormSelect() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <>
      <FormSelectFiled
        options={options}
        placeholder="Select an option"
        onSelectChange={handleSelectChange}
      />

      {selectedValue}
    </>
  );
}
