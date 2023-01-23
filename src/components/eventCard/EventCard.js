import React from "react";

import "./EventCard.css";

const EventCard = ({ img, title, date }) => {
  return (
    <div className="codeutsava__section3-card">
      <img className="codeutsava__section3-image" src={img} alt="" />
      <div className="codeutsava__section3-cardTitle">{title}</div>
      <div className="codeutsava__section3-divider"></div>
      <div className="codeutsava__section3-details">{date}</div>
    </div>
  );
};

export default EventCard;
