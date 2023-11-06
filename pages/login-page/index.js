import React from "react";
import style from "../../styles/saransh/singuppage.module.css";
import FormComponent from "../../jsonData/saransh/FormComponent";
import { loginInputs } from "../../jsonData/saransh/SaranshFormInputs";

export default function LoginPage() {
  return (
    <>
      <div className={style.page_mainContainer}>
        <div className={style.form_mainContainer}>
          <FormComponent
            formTitle="LOGIN"
            btnText={"LOGIN"}
            customInputs={loginInputs}
            styles={style}
          />
        </div>
      </div>
    </>
  );
}
