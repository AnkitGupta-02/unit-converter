const lengthConversions = {
    millimeter: {
      millimeter: 1,
      centimeter: 0.1,
      meter: 0.001,
      kilometer: 0.000001,
      inch: 0.0393700787,
      foot: 0.00328084,
      yard: 0.00109361,
      mile: 0.000000621371,
    },
    centimeter: {
      millimeter: 10, // 1 mm = 0.1 cm
      centimeter: 1, // Base unit
      meter: 0.01, // 1 m = 100 cm
      kilometer: 0.00001, // 1 km = 100,000 cm
      inch: 0.3937007874, // 1 inch = 2.54 cm
      foot: 0.032808399, // 1 foot = 30.48 cm
      yard: 0.010936133, // 1 yard = 91.44 cm
      mile: 0.0000062137, // 1 mile = 160,934.4 cm
    },
    meter: {
      millimeter: 1000, // 1 m = 1000 mm
      centimeter: 100, // 1 m = 100 cm
      meter: 1, // Base unit
      kilometer: 0.001, // 1 m = 0.001 km
      inch: 39.3701, // 1 m = 39.3701 inches
      foot: 3.28084, // 1 m = 3.28084 feet
      yard: 1.09361, // 1 m = 1.09361 yards
      mile: 0.000621371, // 1 m = 0.000621371 miles
    },
    kilometer: {
      millimeter: 1000000, // 1 km = 1,000,000 mm
      centimeter: 100000, // 1 km = 100,000 cm
      meter: 1000, // 1 km = 1000 m
      kilometer: 1, // Base unit
      inch: 39370.1, // 1 km = 39,370.1 inches
      foot: 3280.84, // 1 km = 3280.84 feet
      yard: 1093.61, // 1 km = 1093.61 yards
      mile: 0.621371, // 1 km = 0.621371 miles
    },
    inch: {
      millimeter: 25.4, // 1 inch = 25.4 mm
      centimeter: 2.54, // 1 inch = 2.54 cm
      meter: 0.0254, // 1 inch = 0.0254 m
      kilometer: 0.0000254, // 1 inch = 0.0000254 km
      inch: 1, // Base unit
      foot: 0.0833333, // 1 inch = 0.0833333 feet
      yard: 0.0277778, // 1 inch = 0.0277778 yards
      mile: 0.0000157828, // 1 inch = 0.0000157828 miles
    },
    foot: {
      millimeter: 304.8, // 1 foot = 304.8 mm
      centimeter: 30.48, // 1 foot = 30.48 cm
      meter: 0.3048, // 1 foot = 0.3048 m
      kilometer: 0.0003048, // 1 foot = 0.0003048 km
      inch: 12, // 1 foot = 12 inches
      foot: 1, // Base unit
      yard: 0.333333, // 1 foot = 0.333333 yards
      mile: 0.000189394, // 1 foot = 0.000189394 miles
    },
    yard: {
      millimeter: 914.4, // 1 yard = 914.4 mm
      centimeter: 91.44, // 1 yard = 91.44 cm
      meter: 0.9144, // 1 yard = 0.9144 m
      kilometer: 0.0009144, // 1 yard = 0.0009144 km
      inch: 36, // 1 yard = 36 inches
      foot: 3, // 1 yard = 3 feet
      yard: 1, // Base unit
      mile: 0.000568182, // 1 yard = 0.000568182 miles
    },
    mile: {
      millimeter: 1609344, // 1 mile = 1,609,344 mm
      centimeter: 160934.4, // 1 mile = 160,934.4 cm
      meter: 1609.344, // 1 mile = 1609.344 m
      kilometer: 1.609344, // 1 mile = 1.609344 km
      inch: 63360, // 1 mile = 63,360 inches
      foot: 5280, // 1 mile = 5280 feet
      yard: 1760, // 1 mile = 1760 yards
      mile: 1, // Base unit
    },
};

export default lengthConversions;
