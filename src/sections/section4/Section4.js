import React from "react";
import "./Section4.css";
import speakers from "../../assets/data/speakersData.js";
import SpeakerCard from "../../components/speakerCard/SpeakerCard";
import TeamCard from "../../components/teamCard/TeamCard";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { sliderSettings } from "../../motionUtils";

const Section4 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="hack4bengal__section3"
      id="speakers"
    >
      <div className="hack4bengal__section3-title">Past Speakers</div>
      <hr />
      <div className="hack4bengal__section3-events-container">
        <Slider {...sliderSettings} className="slider">
          {speakers.map((speaker, key) => (
            <TeamCard
              index={key}
              img={speaker.img}
              name={speaker.name}
              position={speaker.position}
              description={speaker.description}
              facebook={speaker.facebook}
              twitter={speaker.twitter}
              linkedin={speaker.linkedin}
              github={speaker.github}
              youtube={speaker.youtube}
            />
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Section4;
