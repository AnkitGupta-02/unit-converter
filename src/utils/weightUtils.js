const weightConversions = {
    milligram: {
      milligram: 1,
      gram: 0.001,
      kilogram: 0.000001,
      ounce: 0.000035274,
      pound: 0.00000220462,
    },
    gram: {
      milligram: 1000,
      gram: 1,
      kilogram: 0.001,
      ounce: 0.035274,
      pound: 0.00220462,
    },
    kilogram: {
      milligram: 1000000,
      gram: 1000,
      kilogram: 1,
      ounce: 35.274,
      pound: 2.20462,
    },
    ounce: {
      milligram: 28349.5,
      gram: 28.3495,
      kilogram: 0.0283495,
      ounce: 1,
      pound: 0.0625,
    },
    pound: {
      milligram: 453592,
      gram: 453.592,
      kilogram: 0.453592,
      ounce: 16,
      pound: 1,
    },
  };

  export default weightConversions;
  