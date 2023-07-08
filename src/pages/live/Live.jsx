import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Live.css";
import liveData from "./LiveData";

const Live = () => {
  const targetTime = new Date("July 9, 2023 11:00:00").getTime();
  const targetDate = new Date("July 9, 2023 11:00:00").getDate();
  const targetHour = new Date("July 9, 2023 11:00:00").getHours();
  const targetMinute = new Date("July 9, 2023 11:00:00").getMinutes();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetTime - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showCount, setShowCount] = useState(false);

  useEffect(() => {
    const startCountdown = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentDate = now.getDate();

      if (
        currentDate >= targetDate &&
        currentHour >= targetHour &&
        currentMinute >= targetMinute
      ) {
        setShowCount(true);

        const countdownEndTime = targetTime + 30 * 60 * 60 * 1000; // 36 hours from now

        const countdownTimer = setInterval(() => {
          const currentTime = new Date().getTime();
          const difference = countdownEndTime - currentTime;

          let hours = Math.floor(difference / (1000 * 60 * 60));
          let minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          );
          let seconds = Math.floor((difference % (1000 * 60)) / 1000);

          setTimeLeft({
            days: 0,
            hours,
            minutes,
            seconds,
          });

          if (difference <= 0) {
            clearInterval(countdownTimer);
          }
        }, 1000);
      }
    };

    const timer = setInterval(startCountdown, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const [currentEvent, setCurrentEvent] = useState(null);
  const [upcomingEvent, setUpcomingEvent] = useState(null);
  const [isSpecial, setIsSpecial] = useState(false);

  useEffect(() => {
    const checkEvents = () => {
      const currentTime = new Date().getTime();

      for (let i = 0; i < liveData.length; i++) {
        const { eventName, eventStartTime, eventEndTime } = liveData[i];

        if (currentTime >= eventStartTime && currentTime < eventEndTime) {
          setCurrentEvent(eventName);
          setUpcomingEvent(
            liveData[i + 1]?.eventName || "Asche Bochor aabar hobe"
          );

          break;
        } else if (currentTime < eventStartTime) {
          setCurrentEvent(null);
          setUpcomingEvent(eventName);
          break;
        }
      }
    };

    const intervalId = setInterval(checkEvents, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="live_parent">
        <div className="live_parent_header">
          <div className="live_counter_parent">
            <h1>Remaining Time</h1>
            <p>
              {new Date().getTime() <
              new Date("July 9, 2023 11:00:00").getTime()
                ? "Hackathon Starting soon!"
                : new Date().getTime() >
                  new Date("July 10, 2023 17:00:00").getTime()
                ? "Hackathon has officially ended!"
                : `${timeLeft.hours} : ${timeLeft.minutes} : ${timeLeft.seconds}`}
            </p>
          </div>

          <div className="live_event_parent">
            <div className="current_event">
              <h1 className="event_titles">Happening</h1>
              <p className="event_name">
                {currentEvent ? currentEvent : "No event"}
              </p>
            </div>

            <div className="upcoming_event">
              <h1 className="event_titles">Upcoming</h1>
              <p className="event_name">
                {upcomingEvent ? upcomingEvent : "Asche Bochor aabar hobe"}
              </p>
            </div>
          </div>
        </div>

        <div className="live_twitter_feed">
          <h2>
            Tweet using <span>#hack4bengal</span> & tag{" "}
            <span>@hack4bengal</span>
          </h2>
          <iframe
            src="https://widgets.sociablekit.com/twitter-hashtag-feed/iframe/162061"
            title="Twitter Hashtag Feed"
            className="live_iframe"
            style={{
              width: "100%",
              height: "80vh",
              border: "none",
              overflow: "hidden",
              scrollbarColor: "red",
            }}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Live;
