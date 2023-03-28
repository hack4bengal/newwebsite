import React, { useEffect } from "react";
import "./Event.css";
import ImageSlider from "./ImageSlider";
import Image from "../../assets/events/event1.jpeg";
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
