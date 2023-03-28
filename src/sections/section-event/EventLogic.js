/* import { useEffect, useState } from "react";
import { data } from "./EventsData";

export const useUpcomingEventsLogic = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [displayData, setDisplayData] = useState([]);

  const slider = document.getElementById("slider");

  const handleNext = () => {
    if (currIndex < data.length - 1) setCurrIndex((currIndex || 0) + 1);
    else setCurrIndex(0);
  };

  const handlePrev = () => {
    if (currIndex > 0) setCurrIndex((currIndex || 0) - 1);
    else setCurrIndex(data.length - 1);
  };

  useEffect(() => {
    console.log("currIndex: ", currIndex);
    if (slider) slider.style.setProperty("--slider-index", currIndex || 0);
    if (slider)
      console.log(
        "slider: ",
        getComputedStyle(slider, null).getPropertyValue("--slider-index")
      );
    const elements = slider?.children;
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        if (i === currIndex) elements[i].style.scale = 1.2;
        else {
          elements[i].style.scale = 1;
        }
      }
    }
  }, [currIndex]);

  return {
    currIndex,
    handleNext,
    handlePrev,
    data,
  };
};
 */

import { useEffect, useState, useRef } from "react";
import { data } from "./EventData";

export const useUpcomingEventsLogic = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [displayData, setDisplayData] = useState([]);

  const sliderRef = useRef(null);

  const handleNext = () => {
    if (currIndex < data.length - 1) setCurrIndex((currIndex || 0) + 1);
    else setCurrIndex(0);
  };

  const handlePrev = () => {
    if (currIndex > 0) setCurrIndex((currIndex || 0) - 1);
    else setCurrIndex(data.length - 1);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    console.log("currIndex: ", currIndex);
    if (slider) slider.style.setProperty("--slider-index", currIndex || 0);
    if (slider)
      console.log(
        "slider: ",
        getComputedStyle(slider, null).getPropertyValue("--slider-index")
      );
    const elements = slider?.children;
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        if (i === currIndex) elements[i].style.scale = 1.2;
        else {
          elements[i].style.scale = 1;
        }
      }
    }
  }, [currIndex]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) setCurrIndex(1);
  }, [sliderRef.current]);

  return {
    currIndex,
    handleNext,
    handlePrev,
    data,
    sliderRef,
  };
};
