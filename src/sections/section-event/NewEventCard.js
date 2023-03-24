import React from "react";

import "./NewEvent.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const NewEventCard = ({
    img,
    name,
    position,
    facebook,
    twitter,
    linkedin,
    github,
    domain,
}) => {
    return (
        <div className="hack4bengal__event-cards">
            <div className="hack4bengal__event-card-img">
                <img src={img} alt="event-card-img" />
            </div>
            <div className="hack4bengal__event-card-content">
                <h3 className="name">{name}</h3>
                <h4 className="title">{position}</h4>
                <h4 className="domain">{domain}</h4>
            </div>
            <ul className="social">
                <li>
                    <a>Know More</a>
                    {/* <a
                        href={linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="fa fa-linkedin"
                        aria-hidden="true"
                    ></a> */}
                </li>
            </ul>
        </div>
    );
};

export default NewEventCard;
