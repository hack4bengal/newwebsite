import React, { useEffect } from "react";
import "./Event.css";
import ImageSlider from "./ImageSlider";
import Image from "../../assets/events/event1.jpeg";
import Image2 from "../../assets/events/event2.png";
import Image3 from "../../assets/events/event3.png";
import Image4 from "../../assets/events/event4.png";
import Image5 from "../../assets/events/event5.png";
import Image6 from "../../assets/events/event6.png";
import Image7 from "../../assets/events/event7.png";
import Image8 from "../../assets/events/event8.png";
import Image9 from "../../assets/events/event9.png";
import Image10 from "../../assets/events/event10.png";
import Image11 from "../../assets/events/event11.png";
import Image12 from "../../assets/events/event12.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


function Events() {



  const slides = [
    { url: Image, title: "Event" },
    { url: Image2, title: "Event" },
    { url: Image3, title: "Event" },
    { url: Image4, title: "Event" },
    { url: Image5, title: "Event" },
    { url: Image6, title: "Event" },
    { url: Image7, title: "Event" },
    { url: Image8, title: "Event" },
    { url: Image9, title: "Event" },
    { url: Image10, title: "Event" },
    { url: Image11, title: "Event" },
    { url: Image12, title: "Event" },


  ];

  return (
    <>
      <div className="events_main">
        <p>Offline Events</p>
        <hr />

        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
          }}
          className="mySwiper"
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide className="swiper-slide">
                {" "}
                <img src={slide.url} alt="" className="swiper_img" />{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default Events;
