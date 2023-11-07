import React, { useState } from "react";
import styles from "../css/accordion.module.css";

export default function AccordionElement({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
    console.log(isExpanded);
  };

  return (
    <div className={`${styles.accordion} ${isExpanded ? "expanded" : ""}`}>
      <div className={`${styles.accordionheader}`} onClick={toggleAccordion}>
        {title}
        <span className={`${styles.icon} ${isExpanded ? "open" : "closed"}`}>
          {isExpanded ? "+" : "-"}
        </span>
      </div>
      <div
        className={`${styles.accordionContent} ${
          isExpanded ? styles.accordionContent : styles.accordionContentExpend
        }`}
      >
        {content}
      </div>
    </div>
  );
}
