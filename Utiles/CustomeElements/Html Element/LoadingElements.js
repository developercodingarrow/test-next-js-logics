import React from "react";
import styles from "../css/loadingElements.module.css";

export default function LoadingElements() {
  return (
    <>
      <div>
        <div className={styles.bouncingDots}>
          <div className={styles.dot}></div>
        </div>
      </div>
    </>
  );
}
