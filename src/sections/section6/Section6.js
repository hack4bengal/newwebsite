import React from "react";

import "./Section6.css";
import { motion } from "framer-motion";

const Section6 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="hack4bengal__section6"
      id="sponsers"
    >
      <div className="hack4bengal__section6-body">
        <div className="hack4bengal__section6-title">Sponsors</div>
        <hr />
        <div className="hack4bengal__section6-content">
          On behalf of team Hack4Bengal, we would like to publicly thank the generous
          sponsors without whom this event could not be held so smoothly.
        </div>

        {/* <div className="hack4bengal__section6-sponsers">
          <div className="hack4bengal__section6-sponser-title">
            Platinum Sponsors
          </div>
          <div className="hack4bengal__section6-sponser-list platinum">
            {sponsers.platinum.map((sponser, index) => (
              <div className="hack4bengal__section6-sponser-image">
                <img key={index} src={sponser.img} />
              </div>
            ))}
          </div>
          <div className="hack4bengal__section6-sponser-title">
            Gold Sponsors
          </div>
          <div className="hack4bengal__section6-sponser-list gold">
            {sponsers.gold.map((sponser, index) => (
              <div className="hack4bengal__section6-sponser-image">
                <img key={index} src={sponser.img} />
              </div>
            ))}
          </div>
          <div className="hack4bengal__section6-sponser-title">Sponsors</div>
          <div className="hack4bengal__section6-sponser-list bronze">
            {sponsers.silver.map((sponser, index) => (
              <div className="hack4bengal__section6-sponser-image">
                <img key={index} src={sponser.img} />
              </div>
            ))}
          </div>
          <div className="hack4bengal__section6-sponser-title">
            Bronze Sponsors
          </div>
          <div className="hack4bengal__section6-sponser-list bronze">
            {sponsers.bronze.map((sponser, index) => (
              <div className="hack4bengal__section6-sponser-image">
                <img key={index} src={sponser.img} />
              </div>
            ))}
          </div>
        </div> */}

        <div className="sponsorsbox box-plat" style={{ marginTop: "40px" }}>
          <div className="sponsorstitle plat">Platinum Sponsors</div>
          <div className="sponsorslist">
            <div className="sponsors-image">
              <img
                src="https://diversion.tech/static/media/github-logo.29d41e7936996d4cdb4cc6f41de5d1e7.svg"
                alt=""
              />
            </div>
            <div className="sponsor-image">
              <img
                src="https://diversion.tech/static/media/github-logo.29d41e7936996d4cdb4cc6f41de5d1e7.svg"
                alt=""
              />
            </div>
            <div className="sponsor-image">
              <img
                src="https://diversion.tech/static/media/github-logo.29d41e7936996d4cdb4cc6f41de5d1e7.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="sponsorsbox h4b-box-gold">
          <div className="sponsorstitle h4b-gold">Gold Sponsors</div>
          <div className="sponsorslist">
            <div className="sponsors-image">
              <img
                src="https://diversion.tech/static/media/github-logo.29d41e7936996d4cdb4cc6f41de5d1e7.svg"
                alt=""
              />
            </div>
            <div className="sponsor-image">
              <img
                src="https://diversion.tech/static/media/github-logo.29d41e7936996d4cdb4cc6f41de5d1e7.svg"
                alt=""
              />
            </div>
            <div className="sponsor-image">
              <img
                src="https://diversion.tech/static/media/github-logo.29d41e7936996d4cdb4cc6f41de5d1e7.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="sponsorsbox h4b-box-silver">
          <div className="sponsorstitle h4b-silver">Silver Sponsors</div>
          <div className="sponsorslist">
            <div className="sponsors-image">
              <img
                src="https://diversion.tech/static/media/github-logo.29d41e7936996d4cdb4cc6f41de5d1e7.svg"
                alt=""
              />
            </div>
            <div className="sponsor-image">
              <img
                src="https://diversion.tech/static/media/github-logo.29d41e7936996d4cdb4cc6f41de5d1e7.svg"
                alt=""
              />
            </div>
            <div className="sponsor-image">
              <img
                src="https://diversion.tech/static/media/github-logo.29d41e7936996d4cdb4cc6f41de5d1e7.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="sponsorsbox h4b-box-bronze">
          <div className="sponsorstitle h4b-bronze">Bronze Sponsors</div>
          <div className="sponsorslist">
            <div className="sponsors-image">
              <img
                src="https://diversion.tech/static/media/github-logo.29d41e7936996d4cdb4cc6f41de5d1e7.svg"
                alt=""
              />
            </div>
            <div className="sponsor-image">
              <img
                src="https://diversion.tech/static/media/github-logo.29d41e7936996d4cdb4cc6f41de5d1e7.svg"
                alt=""
              />
            </div>
            <div className="sponsor-image">
              <img
                src="https://diversion.tech/static/media/github-logo.29d41e7936996d4cdb4cc6f41de5d1e7.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hack4bengal__section6-content" style={{marginTop:'50px', fontWeight:'bold'}}>
          Want to sponsor us? <a href="mailto:sample" className="link-us-sponsor" style={{color:'#E13B3C'}}>Contact us</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Section6;
