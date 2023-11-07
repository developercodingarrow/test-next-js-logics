import React from "react";
import LoadingElements from "../../../Utiles/CustomeElements/Html Element/LoadingElements";

export default function Loading() {
  return (
    <>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <LoadingElements />
      </div>
    </>
  );
}
