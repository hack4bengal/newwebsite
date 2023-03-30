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
          <div
            className="hack4bengal__section6-sponser-title"
            style={{ marginBottom: "-40px" }}
          >
            In Collaboration With
          </div>
          <div className="hack4bengal__section6-sponser-list platinum">
            <div className="hack4bengal__section6-sponser-image">
              {sponsers.platinum.map((sponser, index) => (
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
              ))}
            </div>
          </div>
          {/* <div className="hack4bengal__section6-sponser-title">
            Silver Sponsor
          </div>
          <div className="hack4bengal__section6-sponser-list platinum">
            <div className="hack4bengal__section6-sponser-image">
              {sponsers.silver.map((sponser, index) => (
                <a href={sponser.link}>
                  {index === 2 ? (
                    <span>
                      <img
                        key={index}
                        src={sponser.img}
                        style={{ marginTop: "9px" }}
                      />
                      <div style={{ textAlign: "center", paddingTop: "11px" }}>
                        <p>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </span>
                  ) : index === 1 ? (
                    <span style={{ position: "relative" }}>
                      <img
                        key={index}
                        src={sponser.img}
                        style={{ width: "180px", borderRadius: "10px" }}
                      />
                      <div style={{ textAlign: "center", marginTop: "3px" }}>
                        <p>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </span>
                  ) : (
                    <span style={{ position: "relative" }}>
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
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
          <div className="hack4bengal__section6-sponser-title">
            Bronze Sponsor
          </div>
          <div className="hack4bengal__section6-sponser-list platinum">
            <div className="hack4bengal__section6-sponser-image">
              {sponsers.bronze.map((sponser, index) => (
                <a href={sponser.link}>
                  {index === 2 ? (
                    <span>
                      <img
                        key={index}
                        src={sponser.img}
                        style={{ marginTop: "9px" }}
                      />
                      <div style={{ textAlign: "center", paddingTop: "11px" }}>
                        <p>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </span>
                  ) : index === 1 ? (
                    <span style={{ position: "relative" }}>
                      <img
                        key={index}
                        src={sponser.img}
                        style={{ width: "180px", borderRadius: "10px" }}
                      />
                      <div style={{ textAlign: "center", marginTop: "3px" }}>
                        <p>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </span>
                  ) : (
                    <span style={{ position: "relative" }}>
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
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div> */}
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
          <div className="partner-two-group">
            <div
              className="two-group-class"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                Silver Partner
              </div>
              <div className="hack4bengal__section6-sponser-list platinum">
                <div className="hack4bengal__section6-sponser-image">
                  {sponsers.silver.map((sponser, index) => (
                    <a href={sponser.link}>
                      <img
                        style={{ borderRadius: "20px" }}
                        key={index}
                        src={sponser.img}
                      />
                      <div style={{ textAlign: "center" }}>
                        <p style={{ paddingTop: "2px" }}>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>{line}</React.Fragment>
                          ))}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="two-group-class"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                Bronze Sponsor
              </div>
              <div className="hack4bengal__section6-sponser-list platinum">
                <div className="hack4bengal__section6-sponser-image">
                  {sponsers.bronze.map((sponser, index) => (
                    <a href={sponser.link}>
                      <img key={index} src={sponser.img} />
                      <div style={{ textAlign: "center" }}>
                        <p style={{ paddingTop: "2px" }}>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>{line}</React.Fragment>
                          ))}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="partner-two-group">
            <div
              className="two-group-class"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                Digital Media Partner
              </div>
              <div className="hack4bengal__section6-sponser-list platinum">
                <div className="hack4bengal__section6-sponser-image">
                  {sponsers.media.map((sponser, index) => (
                    <a href={sponser.link}>
                      <img
                        style={{ borderRadius: "20px" }}
                        key={index}
                        src={sponser.img}
                      />
                      <div style={{ textAlign: "center" }}>
                        <p style={{ paddingTop: "2px" }}>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>{line}</React.Fragment>
                          ))}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="two-group-class"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                Domain Partner
              </div>
              <div className="hack4bengal__section6-sponser-list platinum">
                <div className="hack4bengal__section6-sponser-image">
                  {sponsers.domain.map((sponser, index) => (
                    <a href={sponser.link}>
                      <img
                        style={{ borderRadius: "20px", width: "158px" }}
                        key={index}
                        src={sponser.img}
                      />
                      <div style={{ textAlign: "center" }}>
                        <p style={{ paddingTop: "2px" }}>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>{line}</React.Fragment>
                          ))}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="partner-two-group">
            <div
              className="two-group-class"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                Social Media Partner
              </div>
              <div className="hack4bengal__section6-sponser-list platinum">
                <div className="hack4bengal__section6-sponser-image">
                  {sponsers.social.map((sponser, index) => (
                    <a href={sponser.link}>
                      <img
                        style={{ borderRadius: "20px", width: "100px" }}
                        key={index}
                        src={sponser.img}
                      />
                      <div style={{ textAlign: "center" }}>
                        <p style={{ paddingTop: "2px" }}>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>{line}</React.Fragment>
                          ))}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="hack4bengal__section6-sponser-title"
            style={{ marginBottom: "-40px" }}
          >
            In-kind Partners
          </div>
          <div className="hack4bengal__section6-sponser-list platinum">
            <div className="hack4bengal__section6-sponser-image">
              {sponsers.partners.map((sponser, index) => (
                <a href={sponser.link}>
                  {index === 2 ? (
                    <span>
                      <img
                        key={index}
                        src={sponser.img}
                        style={{ marginTop: "9px" }}
                      />
                      <div style={{ textAlign: "center", paddingTop: "11px" }}>
                        <p>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </span>
                  ) : index === 1 ? (
                    <span style={{ position: "relative" }}>
                      <img
                        key={index}
                        src={sponser.img}
                        style={{ width: "180px", borderRadius: "10px" }}
                      />
                      <div style={{ textAlign: "center", marginTop: "3px" }}>
                        <p>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </span>
                  ) : (
                    <span style={{ position: "relative" }}>
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
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* 
          <div className="hack4bengal__section6-sponser-list platinum">
            <div className="hack4bengal__section6-sponser-image">
              {sponsers.domain.map((sponser, index) => (
                <a href={sponser.link}>
                  <img style={{ borderRadius: '20px', }} key={index} src={sponser.img} />
                  <div style={{ textAlign: "center" }}>
                    <p>
                      {sponser.txt.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div> */}
        </div>
        <h2>More Sponsors To be Declared Soon</h2>

        <div
          className="hack4bengal__section6-content"
          style={{ marginTop: "50px", fontWeight: "bold" }}
        >
          Want to sponsor us? <br />
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
