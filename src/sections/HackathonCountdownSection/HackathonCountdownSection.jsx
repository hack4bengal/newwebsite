import React from "react";

import "./HackathonCountdownSection.css";
import { motion } from "framer-motion";
import Timer from "../../components/timer/Timer";

const HackathonCountdownSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: false }}
        className="hack4bengal__section2"
        id="aboutus"
      >
        <div className="hack4bengal_countdown_main">
          <div>
            <h1>Hackathon starts in</h1>
            <hr style={{ marginBottom: "70px" }} />
            <Timer />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HackathonCountdownSection;
