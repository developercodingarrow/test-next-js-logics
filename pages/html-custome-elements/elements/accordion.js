import React from "react";
import AccordionElement from "../../../Utiles/CustomeElements/Html Element/AccordionElement";

export default function Accordion() {
  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ border: "1px solid red", width: "300px", height: "300px" }}>
        <AccordionElement
          title="Section 1"
          content="Content for section 1 goes here."
        />
      </div>
    </div>
  );
}
