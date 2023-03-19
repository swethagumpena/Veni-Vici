import React from "react";
import AttributeCard from "../AttributeCard/AttributeCard";
import "./InfoCard.css";

const InfoCard = ({ name, options, image }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <div className="attribute-section">
        {options.map((option, i) => (
          <AttributeCard key={i} text={option} isBanned={false} />
        ))}
      </div>
      <img className="dogImg" src={image} />
    </div>
  );
};

export default InfoCard;
