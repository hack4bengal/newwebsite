import React from "react";
import "./PastSpeakersSection.css";
import speakers from "../../assets/data/speakersData.js";
import NewTeamCard from "../../components/teamCard/NewTeamCard";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { sliderSettings } from "../../motionUtils";
const PastSpeakersSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="pastspeaker_section"
      id="speakers"
    >
      <div className="pastspeaker_section-title">Past Speakers</div>
      <hr />
      <div className="pastspeaker_section-events-container">
        <Slider {...sliderSettings} className="slider">
          {speakers.map((speaker, key) => (
            <NewTeamCard
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

export default PastSpeakersSection;
