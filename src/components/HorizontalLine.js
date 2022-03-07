import React from "react";

const HorizonLine = ({ text }) => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1em",
        margin: "10px 0 5px 0",
      }}
    >
      <span style={{ padding: "0 10px" }}></span>
    </div>
  );
};

export default HorizonLine;