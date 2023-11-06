import React, { useState } from "react";

export default function useCustomehook() {
  const [count, setcount] = useState(0);

  //   Increment Counter
  const incrementHandel = (props) => {
    setcount((prevCount) => prevCount + 1);
  };

  const decrementHandel = () => {
    setcount(count - 1);
    console.log(count);
  };

  return {
    counter: count,
    increment: incrementHandel,
    decrement: decrementHandel,
  };
}
