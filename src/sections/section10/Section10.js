import React from "react";

import "./Section10.css";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const section10 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="hack4bengal__section10"
      id="my-team"
    >
      <div className="hack4bengal__section10-body" id="team">
        <div className="hack4bengal__section10-title">
          Wondering who all make this possible?
        </div>
        <div className="hack4bengal__team-subtitle hack4bengal__section10-title2 ">
          Hack4Bengal is a team of 30+ enthusiastic folks, led by 4!
        </div>
        <Link to="/team">
          <button className="hack4bengal__section10-button">
            Meet our Team
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default section10;
