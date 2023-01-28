import "./TimelineOne.css";
import { useState } from "react";
export default function TimelineOne() {
  const [active, setActive] = useState(0);
  const data = [
    {
      time: "1st February",
      desc: "Registrations",
      date: "1st to 5th February",
      dateDesc: "Registartions start!",
      descInDepth:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      time: "6th February",
      desc: "Pre Hackathon Sessions",
      date: "6th to 7th February",
      dateDesc: "Pre Hackathon Sessions",
      descInDepth:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      time: "8th February",
      desc: "Hackathon",
      date: "8th to 11th February",
      dateDesc: "Hackathon Begins",
      descInDepth:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      time: "12th February",
      desc: "Closing Ceremony",
      date: "12th February",
      dateDesc: "Closing Ceremony",
      descInDepth:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
        </div>
        <div className="timeline-card">
          <div className="timeline-card-header">
            <div className="col-1">{data[active].date}</div>
            <div className="col-2">{data[active].dateDesc}</div>
          </div>
          <div>
            <div className="timeline-card-body">{data[active].descInDepth}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
