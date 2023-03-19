import "./TimelineOne.css";
import { useState } from "react";
export default function TimelineOne() {
  const [active, setActive] = useState(0);
  const data = [
    {
      time: "21st March",
      desc: "Registrations begins",
      date: "21st March",
      dateDesc: "Registrations begins",
      descInDepth:
        "We're thrilled to let you know that registration for our upcoming event will commence on March 21st! This event is perfect for developers of all levels, providing an ideal platform to showcase your skills, learn something new, and network with fellow enthusiasts.\n \n Our hackathon is designed to challenge participants to develop innovative solutions to a problem or challenge within a set time limit. We kindly request that all participants review our Code of Conduct. Should you have any registration-related queries, please join our discord server and obtain a ticket to speak with the organizers directly.",
    },
    // {
    //   time: "TBA",
    //   desc: "Pre hackathon session",
    //   date: "TBA",
    //   dateDesc: "Pre Hackathon Sessions",
    //   descInDepth:
    //     "Pre-hackathon sessions are events or workshops that are held prior to a hackathon.These sessions are designed to provide participants with an introduction to the skills, tools, and technologies that will be used during the hackathon. They may also provide opportunities for participants to network with each other and with mentors, as well as to receive guidance and advice from experts in the field.\n These sessions typically cover a wide range of topics, such as programming languages, design thinking, project management, teamwork, and more. The aim is to help participants become familiar with the tools and technologies that will be used during the hackathon, and to provide a foundation of knowledge for participants to build upon.\n Overall, pre-hackathon sessions are an important part of the hackathon experience and can help participants get the most out of the event.",
    // },
    {
      time: "28th April",
      desc: "Hackathon Start - Opening Ceremony",
      date: "28th April",
      dateDesc: "Hackathon Start - Opening Ceremony",
      descInDepth:
        "Join us for the kick-off of the Hack4bengal - an epic weekend of coding, creativity, and collaboration! we're ready to unleash the power of innovation and creativity. Join us for the opening ceremony, where we'll set the stage for a weekend of coding, problem-solving, and collaboration. \n\n On 28th during the opening ceremony, you'll have the opportunity to meet with other participants, hear from industry leaders and experts, and learn about the exciting challenges and opportunities that await you. With prizes, workshops, and mentorship opportunities, this is an event you won't want to miss.\n So, gather your team, sharpen your skills, and get ready to make a difference. We're ready for an unforgettable weekend of innovation, and we hope you are too! Register now and let's get this hackathon started! \n We Welcome everyone to our Hackathon.",
    },
    {
      time: "28th - 30th April",
      desc: "Hackathon In Progress",
      date: "28th - 30th April",
      dateDesc: "Hackathon In Progress",
      descInDepth:
        "Excitement is in the air as the Hack4Bengal 2.0 is now in full swing! \n\n Participants from all over are hard at work, collaborating and creating innovative solutions. The energy is high as they work tirelessly to build unique projects and compete for the grand prize. Our expert judges are on the lookout for the best ideas and talent, while sponsors are providing valuable resources and support. It's a true tech extravaganza with non-stop learning and networking opportunities. Stay tuned for updates and results! Don't miss the chance to witness these amazing projects and talented individuals in action.",
    },
    {
      time: "30th April",
      desc: "Hackathon End - Closing Ceremony",
      date: "30th April",
      dateDesc: "Hackathon End - Closing Ceremony",
      descInDepth:
        "Manifestation of your crazy ideas begins! It's time to announce the Winners. \n\nAs hours of utter dedication and hard work end, the time has come to appreciate the efforts and ideas that strived to make a difference and reflect their creativity to the world. As well as extending a hearty vote of thanks to all our partners without whom, Hack4Bengal won't be so massive. Hope you take away tons of goodies and good vibes with you!",
    },
  ];
  return (
    <div>
      <div className="headers-timeline">
        <div className="row-one">
          <div className="headers">
            <div
              className={`boxed ${active === 0 ? "active-timelineOne" : ""}`}
              onClick={() => setActive(0)}
            >
              <div className="time-head">{data[0].time}</div>
              <div className="desc-head">{data[0].desc}</div>
              <div className={`${active === 0 ? "arrow-down" : ""}`}></div>
            </div>
          </div>
          <div className={`${active === 0 ? "show-mob-time" : "hid-mob-time"}`}>
            <div
              className={`timeline-card timeline-card-mobile ${
                active === 0 ? "show-mob-time" : "hid-mob-time"
              }`}
            >
              <div className="timeline-card-header">
                <div className="col-1">{data[0].date}</div>
                <div className="col-2">{data[0].dateDesc}</div>
              </div>
              <div>
                <div className="timeline-card-body">{data[0].descInDepth}</div>
              </div>
            </div>
          </div>

          <div className="headers">
            <div
              className={`boxed ${active === 1 ? "active-timelineOne" : ""}`}
              onClick={() => setActive(1)}
            >
              <div className="time-head">{data[1].time}</div>
              <div className="desc-head">{data[1].desc}</div>
              <div className={`${active === 1 ? "arrow-down" : ""}`}></div>
            </div>
          </div>
          <div className={`${active === 1 ? "show-mob-time" : "hid-mob-time"}`}>
            <div
              className={`timeline-card timeline-card-mobile ${
                active === 1 ? "show-mob-time" : "hid-mob-time"
              }`}
            >
              <div className="timeline-card-header">
                <div className="col-1">{data[1].date}</div>
                <div className="col-2">{data[1].dateDesc}</div>
              </div>
              <div>
                <div className="timeline-card-body">
                  {data[1].descInDepth.split("\n").map((x) => (
                    <span>
                      {x}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="headers">
            <div
              className={`boxed ${active === 2 ? "active-timelineOne" : ""}`}
              onClick={() => setActive(2)}
            >
              <div className="time-head">{data[2].time}</div>
              <div className="desc-head">{data[2].desc}</div>
              <div className={`${active === 2 ? "arrow-down" : ""}`}></div>
            </div>
          </div>
          <div className={`${active === 2 ? "show-mob-time" : "hid-mob-time"}`}>
            <div className="timeline-card timeline-card-mobile">
              <div className="timeline-card-header">
                <div className="col-1">{data[2].date}</div>
                <div className="col-2">{data[2].dateDesc}</div>
              </div>
              <div>
                <div className="timeline-card-body">{data[2].descInDepth}</div>
              </div>
            </div>
          </div>

          <div className="headers">
            <div
              className={`boxed ${active === 3 ? "active-timelineOne" : ""}`}
              onClick={() => setActive(3)}
            >
              <div className="time-head">{data[3].time}</div>
              <div className="desc-head">{data[3].desc}</div>
              <div className={`${active === 3 ? "arrow-down" : ""}`}></div>
            </div>
          </div>
          <div className={`${active === 3 ? "show-mob-time" : "hid-mob-time"}`}>
            <div className="timeline-card timeline-card-mobile">
              <div className="timeline-card-header">
                <div className="col-1">{data[3].date}</div>
                <div className="col-2">{data[3].dateDesc}</div>
              </div>
              <div>
                <div className="timeline-card-body">{data[3].descInDepth}</div>
              </div>
            </div>
          </div>

          {/* <div className="headers">
            <div
              className={`boxed ${active === 4 ? "active-timelineOne" : ""}`}
              onClick={() => setActive(3)}
            >
              <div className="time-head">{data[4].time}</div>
              <div className="desc-head">{data[4].desc}</div>
              <div className={`${active === 3 ? "arrow-down" : ""}`}></div>
            </div>
          </div>
          <div className={`${active === 4 ? 'show-mob-time' : 'hid-mob-time'}`}>
            <div className='timeline-card timeline-card-mobile'>
              <div className="timeline-card-header">
                <div className="col-1">{data[4].date}</div>
                <div className="col-2">{data[4].dateDesc}</div>
              </div>
              <div>
                <div className="timeline-card-body">{data[4].descInDepth}</div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="timeline-card timeline-card-xl">
          <div className="timeline-card-header">
            <div className="col-1">{data[active].date}</div>
            <div className="col-2">{data[active].dateDesc}</div>
          </div>
          <div>
            <div className="timeline-card-body">
              {data[active].descInDepth.split("\n").map((x) => (
                <span>
                  {x}
                  <br />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
