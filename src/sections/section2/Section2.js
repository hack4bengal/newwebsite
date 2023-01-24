import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';

import "./Section2.css";

import WordGlobe from "../../components/wordGlobe/WordGlobe";
import h4byoga from "../../assets/lottiefiles/h4byoga.json";

import { motion } from "framer-motion";

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
        <h1>About Us</h1>
        <hr />

        <div className="h4b_about_sub">
          <Player autoplay loop src={h4byoga} className="playeryoga" ></Player>
          <div className="h4b_about_textdiv">
            <div cn="h4b_about_textdiv_sub">
              <span>
                A Community of enthusiastic hackers, who are ready to take up any challenge.
              </span> <br />
              Hack4Bengal began with the idea of bringing together the best of the best in the field of technology and provide a platform for the students to showcase their skills and work.
            </div>

            <div className="h4b_about_more">
              <div className="h4b_about_more_element">
                <img src="https://uploads-ssl.webflow.com/6327d6e9409aa34035883fac/6360a92f701e5f07088826a4_Flower-small.png" alt="" />
                <p className="h4b_about_more_element_title">Digitally Together</p>
                <p>Though the Hackathon is offline this time, we will be virtually connected with our community online</p>
              </div>


              <div className="h4b_about_more_element">
                <img src="https://uploads-ssl.webflow.com/6327d6e9409aa34035883fac/6360a9327602010903fd7889_Innerstar-small.png" alt="" />
                <p className="h4b_about_more_element_title">Exciting Rewards</p>
                <p>Whatever be the contribution, there will be swags for everyone! Yes you read that right</p>
              </div>


              <div className="h4b_about_more_element">
                <img src="https://uploads-ssl.webflow.com/6327d6e9409aa34035883fac/6360a9359c0f366d66f8632e_Star-small.png" alt="" />
                <p className="h4b_about_more_element_title">Most Awaited</p>
                <p>What started as a team of 3, is now a community of 1500+ Hackers and still counting.</p>
              </div>

            </div>
          </div>
        </div>


      </div>

    </motion.div>
  );
};

export default Section2;
