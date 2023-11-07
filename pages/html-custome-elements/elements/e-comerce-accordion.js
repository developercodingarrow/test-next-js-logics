import React, { useState } from "react";
import EcomerceAccordionElement from "../../../Utiles/CustomeElements/Html Element/EcomerceAccordionElement";
import styles from "../../../Utiles/CustomeElements/css/EcomerceAccordionElement.module.css";

const sampleData = [
  {
    title: "Brand",
    items: ["Godrej", "GLS", "DLF"],
  },
  {
    title: "Size",
    items: ["2 BHK", "3 BHK"],
  },
  {
    title: "Categories",
    items: ["Residential", "Commercial"],
  },
];

export default function EcomerceAccordion() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
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
        <div
          style={{ border: "1px solid red", width: "500px", height: "400px" }}
        >
          <div
            className={`${styles.accordion} ${
              isExpanded ? styles.accordionContentExpend : ""
            }`}
          >
            <div
              className={`${styles.accordionheader}`}
              onClick={toggleAccordion}
            >
              Title..
              <span
                className={`${styles.icon} ${isExpanded ? "open" : "closed"}`}
              >
                {isExpanded ? "+" : "-"}
              </span>
            </div>
            <div
              className={`${styles.accordionContent} ${
                isExpanded
                  ? styles.accordionContent
                  : styles.accordionContentExpend
              }`}
            >
              {sampleData.map((category, index) => (
                <div key={index}>
                  <EcomerceAccordionElement
                    title={category.title}
                    items={category.items}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
