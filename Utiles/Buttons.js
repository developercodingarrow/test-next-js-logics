import React from "react";

export default function Buttons({ children, className, onClick }) {
  return (
    <div>
      <button className={`custom-button ${className}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
