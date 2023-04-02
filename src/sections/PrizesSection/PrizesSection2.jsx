import React from "react";
import "./PrizesSection2.css";
import Certificates from "../../components/Certificates/Certificates.jsx";

import "dracula-ui/styles/dracula-ui.css";
import {Card, Text, textAligns} from "dracula-ui";
import {motion} from "framer-motion";

import {Link} from "react-router-dom";

function PrizesSection2() {
  const defaultOptions = {
    loop: true,
    // autoplay: true,
    // animationData: animationData,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  return (
    <>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: {duration: 1}}}
        viewport={{once: false}}
        className="prize_section"
      >
        <div className="boxesContainer">
          <div className="prize_section-title1">Prizes</div>
          <hr />
          <div className="prize_section-title2">
            Win exciting prizes and swags!
          </div>

          <div className="boxesWrapper">
            <div class="box no2">
              <div className="upper_numbers">
                <h1 className="winnerHead">2</h1>
              </div>
              <div class="glass"></div>

              <div class="content">
                <h2>Second Price</h2>
                <p>Cash Prize of TBA</p>
              </div>
            </div>
            <div class="box no1">
              <div className="upper_numbers">
                <h1 className="winnerHead">1</h1>
              </div>
              <div class="glass"></div>
              <div class="content">
                <h2>First Prize</h2>
                <p>Cash Prize of TBA</p>
              </div>
            </div>
            <div class="box no3">
              <div className="upper_numbers">
                <h1 className="winnerHead">3</h1>
              </div>
              <div class="glass"></div>

              <div class="content">
                <h2>Third Prize</h2>
                <p>Cash Prize TBA</p>
              </div>
            </div>
          </div>

          <Link to="/prizes">
            <button className="more_prizes_section_button">
              Checkout More Prizes
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}

export default PrizesSection2;
