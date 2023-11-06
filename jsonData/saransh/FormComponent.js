import React from "react";
import style from "../../styles/saransh/singuppage.module.css";
import SaranshFormInput from "../../Components UI/SaranshFormInput";
import Buttons from "../../Utiles/Buttons";
import { useForm, Controller } from "react-hook-form";

export default function FormComponent(props) {
  const { formTitle, customInputs, btnText, styles } = props;
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm({
    mode: "all", // Use "onChange" mode for real-time validation as the user types
  });

  const handleFormSubmit = (data) => {
    alert("Form submitted with data: " + JSON.stringify(data));
  };

  console.log("error", errors); // this error show emity

  const SignUpInputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "User Name",
      lable: "Name",
      validation: {
        required: "Name is required.",
      },
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "email",
      lable: "email",
      validation: {
        required: "Email is required.",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address.",
        },
      },
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "password",
      lable: "password",
      validation: {
        required: "Password is required.",
      },
    },
    {
      id: 4,
      name: "Confirmpassword",
      type: "text",
      placeholder: "Confirm password",
      lable: "Confirm password",
      validation: {
        required: "Confirm Password is required.",
        validate: (value) =>
          value === watch("password") || "Passwords do not match.",
      },
    },
  ];

  const inputsToRender = customInputs ? customInputs : SignUpInputs;

  return (
    <>
      <div className={styles.FormTitle}>
        <h3>{formTitle}</h3>
      </div>
      <div className={styles.form_filedContainer}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {inputsToRender.map((input) => {
            return (
              <div className={styles.filedBox} key={input.id}>
                <Controller
                  name={input.name}
                  control={control}
                  defaultValue=""
                  rules={input.validation}
                  render={({ field }) => (
                    <>
                      <SaranshFormInput
                        key={input.id}
                        {...input}
                        {...field}
                        labelClassName={styles.form_lable} // CSS class for the label
                        inputClassName={styles.from_input}
                      />
                      {errors[input.name] && (
                        <p className={styles.error}>
                          {errors[input.name].message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
            );
          })}
          <div>
            <Buttons className={styles.btn} type="submit" disabled={!isValid}>
              {btnText}
            </Buttons>
          </div>
        </form>
      </div>
    </>
  );
}
