import React from "react";

import "./Team.css";

import overAllCoordinaters from "../../assets/data/overAllCoordinatorsData";
// import headCoordinaters from "../../assets/data/headCoordinatorsData";
// import managers from "../../assets/data/managersData";
import executives from "../../assets/data/executivesData";

import TeamCard from "../../components/teamCard/TeamCard";
// import TeamCard2 from "../../components/teamCard2/TeamCard2";
import TeamCard3 from "../../components/teamCard3/TeamCard3";
import { motion } from "framer-motion";

// import tcp from "../../assets/img/H4B-logo-black.png";

const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="hack4bengal__team"
      id="speakers"
    >
      <div className="hack4bengal__team-body">
        <div className="hack4bengal__team-header-container">
          {/* <div className="hack4bengal__team-main-title">
            Team Hack4Bengal 2023
          </div>
          <div className="hack4bengal__team-subtitle">
            Hack4Bengal is a team of 30+ enthusiastic folks, led by 3!
          </div> */}
        </div>
        <div className="hack4bengal__team-title">Lead Organizers</div>
        <hr />
        <div className="hack4bengal__team-members">
          {overAllCoordinaters.map((member, index) => (
            <TeamCard
              key={index}
              img={member.Photo}
              name={member.Name}
              // facebook={member.facebook}
              // twitter={member.twitter}
              // github={member.github}
              linkedin={member.linkedin}
              position={member.position}
              domain={member.Domain}
            />
          ))}
        </div>
        <div className="hack4bengal__team-title">Leaders</div>
        <hr />
        <div className="hack4bengal_team-leaders">
          <div className="hack4bengal__team-members">
            {executives.slice(0, 8).map((member, index) => (
              <TeamCard
                key={index}
                img={member.Photo}
                name={member.Name}
                linkedin={member.linkedin}
                position={member.position}
                domain={member.Domain}
              />
            ))}
          </div>
        </div>
        <div className="hack4bengal__team-title">Core Team</div>
        <hr />
        <div className="hack4bengal__team-members">
          {executives.slice(8).map((member, index) => (
            <TeamCard
              key={index}
              img={member.Photo}
              name={member.Name}
              linkedin={member.linkedin}
              position={member.position}
              domain={member.Domain}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
