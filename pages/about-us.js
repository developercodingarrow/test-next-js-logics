import { React, useContext } from "react";
import Layout from "../Components UI/Layout";
import styles from "../styles/aboutus.module.css";
import { UIContext } from "../contextApi/UIContextApi";

export default function Aboutus() {
  const { toggle, handleToggleButton } = useContext(UIContext);

  return (
    <>
      <Layout>
        <h1 className="heading">This is about us page</h1>

        <div className={toggle ? styles.open : styles.close}>
          <h4>{toggle ? "open" : "close"}</h4>
        </div>

        <button onClick={handleToggleButton}> toggle</button>
      </Layout>
    </>
  );
}
