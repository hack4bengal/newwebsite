import React from "react";
import "./NewEvent.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const NewEventCard = ({
    img,
}) => {
    return (



        <div className="neweventcard_main">

            <img src={img} alt="event-card-img" />

        </div>
    );
};

export default NewEventCard;
