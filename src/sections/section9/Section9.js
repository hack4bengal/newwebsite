import React from "react";

import Prizes from "../../assets/data/PrizesData";
import PrizeBox from "../../components/prizeBox/PrizeBox.js";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "./Section9.css";

const Section9 = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="hack4bengal__section9"
      id="prizes"
    >
      <div className="hack4bengal__section9-title">
        <div className="hack4bengal__section9-title1">Prizes</div>
        <hr />
        <div className="hack4bengal__section9-title2">
          Win exciting prizes worth upto 10 lakhs
        </div>
      </div>
      {/* <div className="hack4bengal__section9-body">
        <div className="hack4bengal__section9-description">
          <div className="prizes_box_main">
            <div className="prizebox prizebox4">
              <div className="prizebox_imgdiv prizebox1_imgdiv">
                <img
                  src="https://hackthisfall.tech/_nuxt/img/gold.e3b24e8.svg"
                  alt=""
                />
              </div>

              <div className="prizes_textdiv prizes_textdiv2">
                <div className="prize_textdiv_texts">
                  <h1>₹30k</h1>
                  <h2>Winner</h2>
                </div>
              </div>
            </div>
            <div className="prizebox prizebox1">
              <div className="prizebox_imgdiv prizebox1_imgdiv">
                <img
                  src="https://hackthisfall.tech/_nuxt/img/silver.3e9bbcb.svg"
                  alt=""
                />
              </div>

              <div className="prizes_textdiv prizes_textdiv1">
                <div className="prize_textdiv_texts">
                  <h1>₹20k</h1>
                  <h2>1st Runner-Up</h2>
                </div>
              </div>
            </div>
            <div className="prizebox prizebox2">
              <div className="prizebox_imgdiv prizebox1_imgdiv">
                <img
                  src="https://hackthisfall.tech/_nuxt/img/gold.e3b24e8.svg"
                  alt=""
                />
              </div>

              <div className="prizes_textdiv prizes_textdiv2">
                <div className="prize_textdiv_texts">
                  <h1>₹30k</h1>
                  <h2>Winner</h2>
                </div>
              </div>
            </div>
            <div className="prizebox prizebox3">
              <div className="prizebox_imgdiv prizebox1_imgdiv">
                <img
                  src="https://hackthisfall.tech/_nuxt/img/bronze.eb1941a.svg"
                  alt=""
                />
              </div>

              <div className="prizes_textdiv prizes_textdiv3">
                <div className="prize_textdiv_texts">
                  <h1>₹20k</h1>
                  <h2>2nd Runner-Up</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prizes_btndiv">
          <button
            class="hack4bengal__section10-button"
            onClick={() => {
              navigate("/prizes");
            }}
          >
            view more prizes
          </button>
        </div>
      </div> */}
    </motion.div>
  );
};

export default Section9;
