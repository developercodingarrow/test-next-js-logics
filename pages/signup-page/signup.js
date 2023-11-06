import React from "react";
import style from "../../styles/saransh/singuppage.module.css";
import SaranshFormInput from "../../Components UI/SaranshFormInput";
import Buttons from "../../Utiles/Buttons";
import { useForm, Controller } from "react-hook-form";
import { loginInputs } from "../../jsonData/saransh/SaranshFormInputs";
import toast, { Toaster } from "react-hot-toast";

export default function SignUpPage() {
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
    toast.success("Here is your toast.");
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

  return (
    <>
      <div className={style.page_mainContainer}>
        <Toaster position="top-right" />
        <div className={style.form_mainContainer}>
          <div className={style.FormTitle}>
            <h3>Register</h3>
          </div>
          <div className={style.form_filedContainer}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              {SignUpInputs.map((input) => {
                return (
                  <div className={style.filedBox} key={input.id}>
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
                            labelClassName={style.form_lable} // CSS class for the label
                            inputClassName={style.from_input}
                          />
                          {errors[input.name] && (
                            <p className={style.error}>
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
                <Buttons
                  className={style.btn}
                  type="submit"
                  disabled={!isValid}
                >
                  Sign Up
                </Buttons>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
