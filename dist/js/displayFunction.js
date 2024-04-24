export const displayFunction = (result) => {
  const outputLength = document.querySelector(".outputLength");
  outputLength.removeAttribute("disabled");
  outputLength.value = result;
};

export const disableOutput = () => {
  document.getElementById("convert-to").setAttribute("disabled", "");
};

/* export const enableOutput = () => {
  document.getElementById("convert-to").removeAttribute("disabled");
}; */
