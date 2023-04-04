import React from "react";
import "./JudgesSection.css";
import judges from "../../assets/data/judgesData";
import NewTeamCard from "../../components/teamCard/NewTeamCard";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { sliderSettings } from "../../motionUtils";

const JudgesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="judges_section"
      id="judges"
    >
      <div className="judges_parent">
        <div className="judges_section_title">Panel Of Judges</div>
        <hr />
        <div className="judges_section_container">
          <Slider {...sliderSettings} className="slider">
            {judges.map((judge, key) => (
              <NewTeamCard
                index={key}
                img={judge.img}
                name={judge.name}
                position={judge.position}
                description={judge.description}
                facebook={judge.facebook}
                twitter={judge.twitter}
                linkedin={judge.linkedin}
                github={judge.github}
                youtube={judge.youtube}
              />
            ))}
          </Slider>
        </div>
      </div>
    </motion.div>
  );
};

export default JudgesSection;
