import React, { useState } from "react";
import useCustomehook from "../hooks/useCustomehook";

export default function HookOne() {
  const { counter, increment, decrement } = useCustomehook();
  return (
    <>
      <div>
        <h1>Test Custome Hook Example-1</h1>

        <h1>{counter}</h1>
        <button style={{ padding: "5px 10px" }} onClick={decrement}>
          -
        </button>
        <button style={{ padding: "5px 10px" }} onClick={increment}>
          +
        </button>
      </div>
    </>
  );
}
