import { getInputFunction } from "./getInputFunction.js";
import {
  displayFunction,
  disableOutput,
  //enableOutput,
} from "./displayFunction.js";

const initApp = () => {
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };
  // toggling unit
  if (!isMobileDevice()) {
    const fromUnit = document.querySelector(".fromUnit");
    fromUnit.addEventListener("click", dropDown);

    //fromUnit.addEventListener("touchstart", dropDown);

    const toUnit = document.querySelector(".toUnit");
    toUnit.addEventListener("click", dropDown);
    // toUnit.addEventListener("touchstart", dropDown);
  }
  // convert

  const convertBtn = document.querySelector(".convert");
  convertBtn.addEventListener("click", (evnt) => {
    //enableOutput();
    // console.log(enableOutput());
    //debugger;
    const result = getInputFunction(evnt);

    displayFunction(result);
  });
  /* convertBtn.addEventListener("touchstart", (evnt) => {
    //enableOutput();
    // console.log(enableOutput());
    //debugger;
    const result = getInputFunction(evnt);

    displayFunction(result);
  });
 */
  const resetBtn = document.querySelector(".reset");

  resetBtn.addEventListener("click", disableOutput);
  // resetBtn.addEventListener("touchstart", disableOutput);
};

document.addEventListener("DOMContentLoaded", initApp);
console.log("DOM content loaded");

// helper function
const dropDown = (evnt) => {
  console.log("Dropdown event triggered");
  const element = evnt.currentTarget;

  const currentSize = element.getAttribute("size");

  if (currentSize === "1") {
    element.setAttribute("size", "5");
  } else {
    element.setAttribute("size", "1");
  }
};
