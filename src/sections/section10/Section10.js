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
      <div className="hack4bengal__section10-body">
        <div className="hack4bengal__section10-title">
          Wondering who all make this possible?
        </div>
        <div className="hack4bengal__team-subtitle hack4bengal__section10-title2 ">
          H4B is a team of 30+ enthusiastic folks, led by 3!
        </div>
        <button className="hack4bengal__section10-button">
          <Link to="/team">Meet our Team</Link>
        </button>
      </div>
    </motion.div>
  );
};

export default section10;
