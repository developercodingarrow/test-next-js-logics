// components/Layout.js

import React, { useState } from "react";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("theme-1");

  const toggleTheme = () => {
    setTheme(theme === "theme-1" ? "theme-2" : "theme-1");
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className={theme}>{children}</div>
    </div>
  );
};

export default Layout;
