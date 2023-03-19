import React from "react";
import AttributeCard from "../AttributeCard/AttributeCard";
import "./BanListSection.css";

const BanListSection = ({ bannedOptions }) => {
  return (
    <div className="card">
      <h2>Ban List</h2>
      <h4>Select an attribute in your listing to ban it</h4>
      <div className="banned-section">
        {bannedOptions.map((option, i) => (
          <AttributeCard key={i} text={option} isBanned={true} />
        ))}
      </div>
    </div>
  );
};

export default BanListSection;
