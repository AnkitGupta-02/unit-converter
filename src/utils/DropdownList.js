const options = {
  length: {
    units: [
      { label: "Millimeter (mm)", value: "millimeter", symbol: "mm" },
      { label: "Centimeter (cm)", value: "centimeter", symbol: "cm" },
      { label: "Meter (m)", value: "meter", symbol: "m" },
      { label: "Kilometer (km)", value: "kilometer", symbol: "km" },
      { label: "Inch (in)", value: "inch", symbol: "in" },
      { label: "Foot (ft)", value: "foot", symbol: "ft" },
      { label: "Yard (yd)", value: "yard", symbol: "yd" },
      { label: "Mile (mi)", value: "mile", symbol: "mi" },
    ],
  },
  weight: {
    units: [
      { label: "Milligram (mg)", value: "milligram", symbol: "mg" },
      { label: "Gram (g)", value: "gram", symbol: "g" },
      { label: "Kilogram (kg)", value: "kilogram", symbol: "kg" },
      { label: "Ounce (oz)", value: "ounce", symbol: "oz" },
      { label: "Pound (lb)", value: "pound", symbol: "lb" },
    ],
  },
  temperature: {
    units: [
      { label: "Celsius (°C)", value: "celsius", symbol: "°C" },
      { label: "Fahrenheit (°F)", value: "fahrenheit", symbol: "°F" },
      { label: "Kelvin (K)", value: "kelvin", symbol: "K" },
    ],
  },
};
export default options;
