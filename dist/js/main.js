import { getInputFunction } from "./getInputFunction.js";
import {
  displayFunction,
  disableOutput,
  //enableOutput,
} from "./displayFunction.js";

const initApp = () => {
  // toggling unit

  const fromUnit = document.querySelector(".fromUnit");
  fromUnit.addEventListener("click", dropDown);
  fromUnit.addEventListener("touchstart", dropDown);

  const toUnit = document.querySelector(".toUnit");
  toUnit.addEventListener("click", dropDown);
  toUnit.addEventListener("touchstart", dropDown);

  // convert

  const convertBtn = document.querySelector(".convert");
  convertBtn.addEventListener("click", (evnt) => {
    //enableOutput();
    // console.log(enableOutput());
    //debugger;
    const result = getInputFunction(evnt);

    displayFunction(result);
  });
  const resetBtn = document.querySelector(".reset");

  resetBtn.addEventListener("click", disableOutput);
};

document.addEventListener("DOMContentLoaded", initApp);

// helper function
const dropDown = (evnt) => {
  const element = evnt.currentTarget;

  const currentSize = element.getAttribute("size");

  if (currentSize === "1") {
    element.setAttribute("size", "5");
  } else {
    element.setAttribute("size", "1");
  }
};
