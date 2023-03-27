import React, { useEffect } from "react";
import "./Event.css";
import ImageSlider from "./ImageSlider";
import Image from "../../assets/events/event1.jpeg";


function Events() {



  const slides = [
    { url: Image, title: "Event" },
    { url: "https://pbs.twimg.com/profile_banners/1470846612301758464/1676495422/1500x500", title: "Event" },
    { url: Image, title: "Event" },
    { url: "https://pbs.twimg.com/profile_banners/1470846612301758464/1676495422/1500x500", title: "Event" },
    { url: Image, title: "Event" },
    { url: "https://pbs.twimg.com/profile_banners/1470846612301758464/1676495422/1500x500", title: "Event" },
    { url: Image, title: "Event" },
  ];

  return (
    <>
      <div className="events_main">
        <p>Offline Events</p>
        <hr />
        <br />
        <div className="Event-containerStyles">
          <ImageSlider slides={slides} />
        </div>
      </div>
    </>


  );
}

export default Events;
