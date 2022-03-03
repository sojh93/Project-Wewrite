import React from "react";

const HorizonLine = ({ text }) => {
  return (
    <div
      style={{
        width: "70%",
        textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.3px",
        margin: "auto",
      }}
    >
      <span style={{ background: "#fff"}}>{text}</span>
    </div>
  );
};

export default HorizonLine;