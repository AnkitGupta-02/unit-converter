const temperatureConversions = {
    celsius: {
      celsius: (value) => value,
      fahrenheit: (value) => (value * 9) / 5 + 32,
      kelvin: (value) => value + 273.15,
    },
    fahrenheit: {
      celsius: (value) => (value - 32) * 5 / 9,
      fahrenheit: (value) => value,
      kelvin: (value) => ((value - 32) * 5 / 9) + 273.15,
    },
    kelvin: {
      celsius: (value) => value - 273.15,
      fahrenheit: (value) => ((value - 273.15) * 9) / 5 + 32,
      kelvin: (value) => value,
    },
  };

  export default temperatureConversions;