import React from "react";
import Link from "next/link";

export default function LoginRegisterUI(props) {
  const { formName } = props;
  return (
    <div>
      <Link href="/"> Home Page</Link>
      <h1> dynimic :- {formName}</h1>
    </div>
  );
}
