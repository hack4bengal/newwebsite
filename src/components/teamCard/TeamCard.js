import React from "react";

import "./TeamCard.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const TeamCard = ({
  img,
  name,
  position,
  facebook,
  twitter,
  linkedin,
  github,
  domain,
  idx,
}) => (
  <div className="hack4bengal__team-card">
    <div className="hack4bengal__team-card-img">
      <img src={img} alt="team-card-img" />
    </div>
    <div className="hack4bengal__team-card-content">
      <h3 className="name">
        {name === "Tamal Das" ? (
          <span>
            Tamal <br /> Das
          </span>
        ) : name === "Kajal Jaiswal" ? (
          <span>
            Kajal <br />
            Jaiswal
          </span>
        ) : name === "Sagnik Mitra" ? (
          <span>
            Sagnik <br /> Mitra
          </span>
        ) : name === "Varun Doshi" ? (
          <span>
            Varun
            <br /> Doshi
          </span>
        ) : name === "Ayush Jha" ? (
          <span>
            Ayush
            <br /> Jha
          </span>
        ) : name === "Ankita Panda" ? (
          <span>
            Ankita
            <br /> Panda
          </span>
        ) : name === "Susmita Dey" ? (
          <span>
            Susmita
            <br /> Dey
          </span>
        ) : name === "Himanshu Rai" ? (
          <span>
            Himanshu
            <br /> Rai
          </span>
        ) : name === "Shafin Kausar" ? (
          <span>
            Shafin
            <br /> Kausar
          </span>
        ) : name === "Vimal Anand" ? (
          <span>
            Vimal
            <br /> Anand
          </span>
        ) : name === "Kiran Mishra" ? (
          <span>
            Kiran
            <br /> Mishra
          </span>
        ) : name === "Srijanna Das" ? (
          <span>
            Srijanna
            <br /> Das
          </span>
        ) : name === "Alapan Das" ? (
          <span>
            Alapan
            <br /> Das
          </span>
        ) : name === "Kunal Ghosh" ? (
          <span>
            Kunal
            <br /> Ghosh
          </span>
        ) : name === "Priyasu Guin" ? (
          <span>
            Priyasu
            <br /> Guin
          </span>
        ) : name === "Diganta Kr Banik" ? (
          <span>
            Diganta
            <br /> Kr Banik
          </span>
        ) : name === "Srishti Majumder" ? (
          <span>
            Srishti
            <br /> Majumder
          </span>
        ) : name === "Sugato Bagchi" ? (
          <span>
            Sugato
            <br /> Bagchi
          </span>
        ) : name === "Dev Kumar Gupta" ? (
          <span>
            Dev
            <br /> Kumar Gupta
          </span>
        ) : name === "Tushar Mukherjee" ? (
          <span>
            Tushar
            <br /> Mukhopadhyay
          </span>
        ) : name === "Shatanik Mahanty" ? (
          <span>
            Shatanik
            <br /> Mahanty
          </span>
        ) : name === "Subhanjan Dutta" ? (
          <span>
            Subhanjan
            <br /> Dutta
          </span>
        ) : name === "Rohit Roy" ? (
          <span>
            Rohit
            <br /> Roy
          </span>
        ) : name === "Aniruddha Sarkar" ? (
          <span>
            Aniruddha <br /> Sarkar
          </span>
        ) : name === "Aharna Haque" ? (
          <span>
            {" "}
            Aharna <br /> Haque
          </span>
        ) : name === "Souradeep Mukherjee" ? (
          <span>
            {" "}
            Souradeep <br /> Mukherjee
          </span>
        ) : name === "Amandeep Singh" ? (
          <span>
            {" "}
            Amandeep <br /> Singh
          </span>
        ) : name === "Koyena Mondal" ? (
          <span>
            Koyena
            <br /> Mondal
          </span>
        ) : name === "Ayushman Sural" ? (
          <span>
            Ayushman
            <br /> Sural
          </span>
        ) : name === "Manish Kr Barnwal" ? (
          <span>
            Manish <br /> Kr Barnwal
          </span>
        ) : name === "Shubham Tribedi" ? (
          <span>
            {" "}
            Shubham <br /> Tribedi
          </span>
        ) : name === "Prosenjit Swarnakar" ? (
          <span>
            {" "}
            Prosenjit <br /> Swarnakar
          </span>
        ) : name === "Shubhayu Majumdar" ? (
          <span>
            {" "}
            Shubhayu <br /> Majumdar
          </span>
        ) : name === "Aditya Seth" ? (
          <span>
            {" "}
            Aditya <br /> Seth
          </span>
        ) : name === "Abhrajit Ghosh" ? (
          <span>
            {" "}
            Abhrajit <br /> Ghosh
          </span>
        ) : name === "Sanmoy Dam" ? (
          <span>
            {" "}
            Sanmoy <br /> Dam
          </span>
        ) : name === "Debanita Roy Bhowmick" ? (
          <span>
            {" "}
            Debanita <br /> Roy Bhowmick
          </span>
        ) : name === "Prachi Kumari" ? (
          <span>
            {" "}
            Prachi <br /> Kumari
          </span>
        ) : (
          name
        )}
      </h3>

      <h4 className="domain">{domain}</h4>
      <h4 className="title">{position}</h4>
    </div>
    <ul className="social">
      {/* <li>
          <a href="" className="fa fa-facebook" aria-hidden="true"></a>
        </li> */}
      {/* <li>
          <a href="" className="fa fa-twitter" aria-hidden="true"></a>
        </li> */}
      {/* <li>
          <a href="" className="fa fa-github" aria-hidden="true"></a>
        </li> */}
      <li>
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="fa fa-linkedin"
          aria-hidden="true"
        ></a>
      </li>
    </ul>
  </div>
);

export default TeamCard;
