import React, { useState } from "react";
import style from "../../styles/saransh/singuppage.module.css";
import SaranshFormInput from "../../Components UI/SaranshFormInput";
import { SignUpInputs } from "../../jsonData/saransh/SaranshFormInputs";
import Buttons from "../../Utiles/Buttons";
import { useForm } from "react-hook-form";
import FormComponent from "../../jsonData/saransh/FormComponent";

export default function SignUpPage() {
  return (
    <>
      <div className={style.page_mainContainer}>
        <div className={style.form_mainContainer}>
          <FormComponent
            formTitle="REGISTER"
            btnText={"SIGN UP"}
            styles={style}
          />
        </div>
      </div>
    </>
  );
}
