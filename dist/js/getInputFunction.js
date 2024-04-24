export const getInputFunction = (evnt) => {
  evnt.preventDefault();
  let fromUnit = document.getElementById("fromUnit").value;

  let length = document.getElementById("convert-from").value;
  /* if (!length) {
    document.querySelector(".convert").setAttribute("disabled", "");
  } */

  let toUnit = document.getElementById("toUnit").value;

  return formulaFunction(fromUnit, length, toUnit);
};
const formulaFunction = (fromUnit, length, toUnit) => {
  let result;
  switch (fromUnit) {
    case "Millimeter":
      switch (toUnit) {
        case "Millimeter":
          result = length;
          return result;
        case "Centimeter":
          result = length / 10;

          return result;
        case "Decimeter":
          result = length / 10 ** 2;
          return result;
        case "Meter":
          result = length / 10 ** 3;
          return result;
        case "Decameter":
          result = length / 10 ** 4;
          return result;
        case "Hectometer":
          result = length / 10 ** 5;
          return result;
        case "Kilometer":
          result = length / 10 ** 6;
          return result;
        case "Inch":
          result = length / 25.4;
          return result;
        case "Foot":
          result = length / 304.8;
          return result;
        case "Yard":
          result = length / 914.4;
          return result;
        case "Mile":
          result = length / 1609e6;
          return result;
      }
      break;
    case "Centimeter":
      switch (toUnit) {
        case "Centimeter":
          result = length;
          return result;
        case "Millimeter":
          result = length * 10;
          return result;
        case "Decimeter":
          result = length / 10;
          return result;
        case "Meter":
          result = length / 10 ** 2;
          return result;
        case "Decameter":
          result = length / 10 ** 3;
          return result;
        case "Hectometer":
          result = length / 10 ** 4;
          return result;
        case "Kilometer":
          result = length / 10 ** 5;
          return result;
        case "Inch":
          result = length / 2.54;
          return result;
        case "Foot":
          result = length / 30.48;
          return result;
        case "Yard":
          result = length / 91.44;
          return result;
        case "Mile":
          result = length / 160900;
          return result;
      }
      break;
    case "Decimeter":
      switch (toUnit) {
        case "Decimeter":
          result = length;
          return result;
        case "Millimeter":
          result = length * 10 ** 2;
          return result;
        case "Centimeter":
          result = length * 10;
          return result;
        case "Meter":
          result = length / 10;
          return result;
        case "Decameter":
          result = length / 10 ** 2;
          return result;
        case "Hectometer":
          result = length / 10 ** 3;
          return result;
        case "Kilometer":
          result = length / 10 ** 4;
          return result;
        case "Inch":
          result = length * 3.937;
          return result;
        case "Foot":
          result = length / 3.048;
          return result;
        case "Yard":
          result = length / 9.144;
          return result;
        case "Mile":
          result = length / 16090;
          return result;
      }
      break;
    case "Meter":
      switch (toUnit) {
        case "Meter":
          result = length;
          return result;
        case "Millimeter":
          result = length * 10 ** 3;
          return result;
        case "Centimeter":
          result = length * 10 ** 2;
          return result;
        case "Decimeter":
          result = length * 10;
          return result;
        case "Decameter":
          result = length / 10;
          return result;
        case "Hectometer":
          result = length / 10 ** 2;
          return result;
        case "Kilometer":
          result = length / 10 ** 3;
          return result;
        case "Inch":
          result = length * 39.37;
          return result;
        case "Foot":
          result = length * 3.21;
          return result;
        case "Yard":
          result = length * 1.094;
          return result;
        case "Mile":
          result = length / 1609;
          return result;
      }
      break;
    case "Decameter":
      switch (toUnit) {
        case "Decameter":
          result = length;
          return result;
        case "Millimeter":
          result = length * 10 ** 4;
          return result;
        case "Centimeter":
          result = length * 10 ** 3;
          return result;
        case "Decimeter":
          result = length * 10 ** 2;
          return result;
        case "Meter":
          result = length * 10;
          return result;
        case "Hectometer":
          result = length / 10;
          return result;
        case "Kilometer":
          result = length / 10 ** 2;
          return result;
        case "Inch":
          result = length * 393.7;
          return result;
        case "Foot":
          result = length * 32.808;
          return result;
        case "Yard":
          result = length * 10.936;
          return result;
        case "Mile":
          result = length / 160.9;
          return result;
      }
      break;
    case "Hectometer":
      switch (toUnit) {
        case "Hectometer":
          result = length;
          return result;
        case "Millimeter":
          result = length * 10 ** 5;
          return result;
        case "Centimeter":
          result = length * 10 ** 4;
          return result;
        case "Decimeter":
          result = length * 10 ** 3;
          return result;
        case "Meter":
          result = length * 10 ** 2;
          return result;
        case "Decameter":
          result = length * 10;
          return result;
        case "Kilometer":
          result = length / 10;
          return result;
        case "Inch":
          result = length * 3937;
          return result;
        case "Foot":
          result = length * 328.1;
          return result;
        case "Yard":
          result = length * 109.4;
          return result;
        case "Mile":
          result = length / 16.093;
          return result;
      }
      break;
    case "Kilometer":
      switch (toUnit) {
        case "Kilometer":
          result = length;
          return result;
        case "Millimeter":
          result = length * 10 ** 6;
          return result;
        case "Centimeter":
          result = length * 10 ** 5;
          return result;
        case "Decimeter":
          result = length * 10 ** 4;
          return result;
        case "Meter":
          result = length * 10 ** 3;
          return result;
        case "Decameter":
          result = length * 10 ** 2;
          return result;
        case "Hectometer":
          result = length * 10;
          return result;
        case "Inch":
          result = length * 39370;
          return result;
        case "Foot":
          result = length * 3281;
          return result;
        case "Yard":
          result = length * 1094;
          return result;
        case "Mile":
          result = length / 1.609;
          return result;
      }
      break;
    case "Inch":
      switch (toUnit) {
        case "Inch":
          result = length;
          return result;
        case "Millimeter":
          result = length * 25.4;
          return result;
        case "Centimeter":
          result = length * 2.54;
          return result;
        case "Decimeter":
          result = length / 3.937;
          return result;
        case "Meter":
          result = length / 39.37;
          return result;
        case "Decameter":
          result = length / 393.7;
          return result;
        case "Hectometer":
          result = length / 3937;
          return result;
        case "Kilometer":
          result = length / 39370;
          return result;
        case "Foot":
          result = length / 12;
          return result;
        case "Yard":
          result = length / 36;
          return result;
        case "Mile":
          result = length / 63360;
          return result;
      }
      break;
    case "Foot":
      switch (toUnit) {
        case "Foot":
          result = length;
          return result;
        case "Millimeter":
          result = length * 304.8;
          return result;
        case "Centimeter":
          result = length * 30.48;
          return result;
        case "Decimeter":
          result = length * 3.048;
          return result;
        case "Meter":
          result = length / 3.281;
          return result;
        case "Decameter":
          result = length / 32.808;
          return result;
        case "Hectometer":
          result = length / 328.1;
          return result;
        case "Kilometer":
          result = length / 3281;
          return result;
        case "Inch":
          result = length * 12;
          return result;
        case "Yard":
          result = length / 3;
          return result;
        case "Mile":
          result = length / 5280;
          return result;
      }
      break;
    case "Yard":
      switch (toUnit) {
        case "Yard":
          result = length;
          return result;
        case "Millimeter":
          result = length * 914.4;
          return result;
        case "Centimeter":
          result = length * 91.44;
          return result;
        case "Decimeter":
          result = length * 9.144;
          return result;
        case "Meter":
          result = length / 1.094;
          return result;
        case "Decameter":
          result = length / 10.936;
          return result;
        case "Hectometer":
          result = length / 109.4;
          return result;
        case "Kilometer":
          result = length / 1094;
          return result;
        case "Inch":
          result = length * 36;
          return result;
        case "Foot":
          result = length * 3;
          return result;
        case "Mile":
          result = length / 1760;
          return result;
      }
      break;
    case "Mile":
      switch (toUnit) {
        case "Mile":
          result = length;
          return result;
        case "Millimeter":
          result = length * 1.609e6;
          return result;
        case "Centimeter":
          result = length * 160900;
          return result;
        case "Decimeter":
          result = length * 16090;
          return result;
        case "Meter":
          result = length * 1609;
          return result;
        case "Decameter":
          result = length * 160.9;
          return result;
        case "Hectometer":
          result = length * 16.093;
          return result;
        case "Kilometer":
          result = length * 1.609;
          return result;
        case "Inch":
          result = length * 63360;
          return result;
        case "Foot":
          result = length * 5280;
          return result;
        case "Yard":
          result = length * 1760;
          return result;
      }
      break;
  }
};
