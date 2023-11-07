import React, { useState } from "react";
import styles from "../css/EcomerceAccordionElement.module.css";

export default function EcomerceAccordionElement({ title, items }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div>
        <div
          className={`${styles.accordionSection} ${
            isExpanded ? "expanded" : ""
          }`}
        >
          <div
            className={`${styles.accordionheader}`}
            onClick={toggleAccordion}
          >
            {title}
            <span
              className={`${styles.icon} ${isExpanded ? "open" : "closed"}`}
            >
              {isExpanded ? "+" : "-"}
            </span>
          </div>
          <div
            className={`${styles.accordionListContent} ${
              isExpanded
                ? styles.accordionListContent
                : styles.accordionListContentClose
            }`}
          >
            {items.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
