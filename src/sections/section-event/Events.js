import React, { useEffect } from "react";
import "./Event.css";
import ImageSlider from "./ImageSlider";
/* import Image from "../../assets/events/event1.jpeg";
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
import Image12 from "../../assets/events/event12.png"; */


import land1 from "../../assets/events/landscape/land1.png";
import land2 from "../../assets/events/landscape/land2.png";
import land3 from "../../assets/events/landscape/land3.png";
import land4 from "../../assets/events/landscape/land4.png";
import land5 from "../../assets/events/landscape/land5.png";


import ver1 from "../../assets/events/potrait/ver1.png";
import ver2 from "../../assets/events/potrait/ver2.png";
import ver3 from "../../assets/events/potrait/ver3.png";
import ver4 from "../../assets/events/potrait/ver4.png";
import ver5 from "../../assets/events/potrait/ver5.png";

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



  /*   const slides = [
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
   */
  return (
    <>
      <div className="events_main">
        <p className="offlineevents">Offline Events</p>
        <hr />

        {/*  <Swiper
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
        </Swiper> */}


        <div className="eventsflex_maindiv">


          <div className="events_flexmain1 events_flexmain">
            <div className="events_flexcol" >
              <img src={land1} alt="" className="event_smallimg" />
              <p className="event_flextext">500+ <br /> <span className="event_flextext2">Hackers</span></p>
            </div>

            <div>
              <img src={ver1} alt="" className="event_largeimg" />
            </div>
          </div>

          <div className="events_flexmain2 events_flexmain">

            <div>
              <img src={ver2} alt="" className="event_largeimg" />
            </div>


            <div className="events_flexcol" >

              <p className="event_flextext">30+ <br /> <span>Partners</span></p>

              <img src={land2} alt="" className="event_smallimg" />
            </div>


          </div>

          <div className="events_flexmain3 events_flexmain">
            <div className="events_flexcol" >
              <img src={land3} alt="" className="event_smallimg" />
              <p className="event_flextext">85+ <br /> <span>H4B Events</span></p>
            </div>

            <div>
              <img src={ver3} alt="" className="event_largeimg" />
            </div>
          </div>

          <div className="events_flexmain4 events_flexmain">
            <div>
              <img src={ver4} alt="" className="event_largeimg" />
            </div>


            <div className="events_flexcol" >

              <p className="event_flextext">15+ <br /> <span>Sponsors</span></p>

              <img src={land4} alt="" className="event_smallimg" />
            </div>

          </div>

          <div className="events_flexmain5 events_flexmain">
            <div className="events_flexcol" >
              <img src={land5} alt="" className="event_smallimg" />
              <p className="event_flextext">300+ <br /> <span>Registration</span></p>
            </div>

            <div>
              <img src={ver5} alt="" className="event_largeimg" />
            </div>
          </div>




        </div>
      </div>
    </>
  );
}

export default Events;
