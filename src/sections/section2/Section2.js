import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import "./Section2.css";
import h4byoga from "../../assets/lottiefiles/h4byoga.json";

import { motion } from "framer-motion";
import TimelineOne from "../../components/timeline/TimelineOne";
import Timer from "../../components/timer/Timer";

const Section2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="hack4bengal__section2"
      id="aboutus"
    >
      <div className="h4b_about_main">
        <div style={{ marginTop: "5rem" }}>
          <h1>Registrations begin in</h1>
          <hr style={{ marginBottom: "70px" }} />
          <Timer />
        </div>

        <h1>About Us</h1>
        <hr />

        <div className="h4b_about_sub">
          <Player autoplay loop src={h4byoga} className="playeryoga"></Player>
          <div className="h4b_about_textdiv">
            <div cn="h4b_about_textdiv_sub">
              <span>
                Hack4Bengal believes in building for the future, empowering
                people irrespective of their fields, to showcase their skills
                and creativity for solving real-life problems.
                <br />
              </span>{" "}
              <br />
              What started with three enthusiastic people in the year 2021, is
              now a community of over 1500 developers. Hack4Bengal has been
              growing from strength to strength and our aim is to go beyond the
              horizons and impact millions of tech talents by providing them
              with a platform to enhance their skills, collaborate and create.
              This time Hack4Bengal is back to leverage your expertise in the
              offline mode. See you there!
            </div>
          </div>
        </div>
        <div style={{ marginTop: "5rem" }} id="timeline">
          <h1>Timeline</h1>
          <hr />
          <TimelineOne />
        </div>
      </div>
    </motion.div>
  );
};

export default Section2;
