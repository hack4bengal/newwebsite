import React from 'react'
import Image from "../../../assets/events/event1.jpeg";
import './EventCard.css'

function EventCard({ event }) {
    return (
        <div className='event-card-wrapper'>
            <img className='card-img' src={Image} />
            <button>{event.title}</button>
        </div>
    )
}

export default EventCard