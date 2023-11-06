import React, { useState } from "react";
import Link from "next/link";
import LoginRegisterUI from "../../Components UI/LoginRegisterUI";
import styles from "../../styles/form/loginform.module.css";
import inputs from "../../jsonData/form-Inputs/login_form_inputs";
import { FontAwesomeIcon, FormInputs } from "../../Utiles/commonImports";
import { faCoffee, faEnvelope, faHouse } from "../../Utiles/icons";

export default function LoginPage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handelsubmit = (e) => {
    e.preventDefault();
  };

  const onChnage = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h1>This is login page</h1>
      <LoginRegisterUI formName="login" />
      <div className={styles.form_container}>
        <div className={styles.form_box}>
          {inputs.map((input) => {
            return (
              <>
                <FormInputs
                  key={input.id}
                  {...input}
                  labelClassName={styles.form_lable} // CSS class for the label
                  inputClassName={styles.from_input}
                  value={values[input.name]}
                  onChnage={onChnage}
                />
              </>
            );
          })}
        </div>
      </div>

      <Link href="/register"> Register page</Link>
    </div>
  );
}
