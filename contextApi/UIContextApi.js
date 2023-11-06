import React, { createContext, useState, useContext } from "react";
export const UIContext = createContext();

// export const useUIContext = () => {
//   return useContext(UIContext);
// };

export default function UIContextApiProvider({ children }) {
  const [toggle, setToggle] = useState(true);

  const handleToggleButton = () => {
    setToggle((prev) => !prev); // Toggle the state
  };

  return (
    <UIContext.Provider value={{ toggle, handleToggleButton }}>
      {children}
    </UIContext.Provider>
  );
}
