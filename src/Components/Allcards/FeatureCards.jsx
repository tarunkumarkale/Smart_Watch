import React from "react"; 
import './Card.css'
const FeatureCard = ({ icon: Icon, title, des }) => {
  return (
    <div className="container-wrapper">
          <div className="card">
        <div className="card-icon">
          <Icon /> {/* Render the icon dynamically */}
        </div>
        <h3 className="title-head">{title}</h3> {/* Applied title class */}
        <p>{des}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
