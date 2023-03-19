import React from "react";
import "./AttributeCard.css";

const AttributeCard = ({ text, isBanned }) => {
  return (
    <button className={isBanned ? "attribute-card-banned" : "attribute-card"}>
      {text}
    </button>
  );
};

export default AttributeCard;
