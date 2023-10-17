import React from "react";

import "./HackathonCountdownSection.css";
import { motion } from "framer-motion";

import winner from "../../assets/images/winners/winner.jpg";
import firstrunner from "../../assets/images/winners/firstrunner.jpg";
import secondrunner from "../../assets/images/winners/secondrunner.jpg";
import { Link } from "react-router-dom";

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
            <h1>WINNERS</h1>
            <hr />
            <p>Featuring Hack4Bengal's top three overall winners</p>

            {/* <Timer /> */}
            <div className="winnercard_div">
              <div className="winnercard_parent">
                <img src={winner} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team TechSprinters</p>
                  <p>Winner</p>
                </div>
              </div>
              <div className="winnercard_parent">
                <img src={firstrunner} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team hackoverflow</p>
                  <p>1st Runner Up</p>
                </div>
              </div>
              <div className="winnercard_parent">
                <img src={secondrunner} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team SkullBots</p>
                  <p>2nd Runner Up</p>
                </div>
              </div>
            </div>

            <Link
              to="/trackprizes"
              style={{ display: "flex", marginTop: "2rem" }}
            >
              <button
                className="meetourteam_section-button"
                style={{ margin: "auto" }}
              >
                View the track prize winners
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HackathonCountdownSection;
