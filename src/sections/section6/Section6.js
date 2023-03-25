import React from "react";
import sponsers from "../../assets/data/sponsersData";
import "./Section6.css";
import { motion } from "framer-motion";
import cscoe from "../../assets/images/sponsers/cscoe.png";

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
        <div className="hack4bengal__section6-title">Partners And Sponsors</div>
        <hr />
        <div className="hack4bengal__section6-content">
          On behalf of the Hack4Bengal team, we would like to extend our
          heartfelt gratitude to the partners and sponsors who will be
          generously supporting us for the upcoming event. Their valuable
          contributions will play an instrumental role in ensuring the smooth
          running of the event, and we look forward to their support.
        </div>
        <div className="hack4bengal__section6-sponsers">
          <div className="hack4bengal__section6-sponser-title">
            In Collaboration With
          </div>
          <div className="hack4bengal__section6-sponser-list platinum">
            {sponsers.platinum.map((sponser, index) => (
              <div className="hack4bengal__section6-sponser-image">
                <a href={sponser.link}>
                  <img key={index} src={sponser.img} />
                  <div style={{ textAlign: "center" }}>
                    <p>
                      {sponser.txt.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </a>
              </div>
            ))}

            {/*   {sponsers.platinum.map((sponser, index) => (
              <div className="hack4bengal__section6-sponser-image">
                <a href={sponser.link}>
                  <img key={index} src={sponser.img} />
                  <div style={{ textAlign: "center", paddingTop: "15px" }}>
                    {sponser.txt}
                  </div>
                </a>
              </div>
            ))} */}
          </div>
          {/* <div className="hack4bengal__section6-sponser-title">
            Incubation Partner
          </div>
          <div className="hack4bengal__section6-sponser-list gold">
            {sponsers.gold.map((sponser, index) => (
              <div className="hack4bengal__section6-sponser-image" >
                <img key={index} src={sponser.img} />
                <div style={{ textAlign: 'center' }}>{sponser.txt}</div>

              </div>
            ))}
          </div> */}
        </div>
        <h2>Sponsors To be Declared Soon</h2>

        <div
          className="hack4bengal__section6-content"
          style={{ marginTop: "50px", fontWeight: "bold" }}
        >
          Want to sponsor us?{" "}
          <a
            href="https://forms.gle/Y77QCcKmMAMpPAmQ9"
            className="link-us-sponsor"
            style={{ color: "#E13B3C" }}
          >
            Contact us
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Section6;
