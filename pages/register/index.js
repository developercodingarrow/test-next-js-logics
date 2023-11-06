import React, { useState } from "react";
import Link from "next/link";
import LoginRegisterUI from "../../Components UI/LoginRegisterUI";
import FormInputs from "../../Components UI/FormInputs";
import styles from "../../styles/form/Registerform.module.css";

export default function RegisterPage() {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "UserName",
      lable: "user Name",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "email",
      lable: "email",
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "password",
      lable: "password",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "text",
      placeholder: "confirmPassword",
      lable: "confirmPassword",
    },
  ];

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
      <h1>This is Register page</h1>

      <LoginRegisterUI formName="Register" />

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
      <Link href="/login"> Login Page</Link>
    </div>
  );
}
