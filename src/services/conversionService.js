import conversions from "../utils/conversionsUtils.js";

export function convert(value, from, to, type) {
  if (!value || !from || !to || !type) {
    throw new Error(`Invalid input: Ensure all parameters are provided`);
  }

  const typeConversions = conversions[type.toLowerCase()];
  if (
    !typeConversions ||
    !typeConversions[from.toLowerCase()] ||
    !typeConversions[to.toLowerCase()]
  ) {
    throw new Error(
      `Unsupported conversion type: ${type}, from: ${from}, to: ${to}`
    );
  }

  const conversionRule = typeConversions[from.toLowerCase()][to.toLowerCase()];

  // If it's a function (temperature), call it; otherwise, perform direct multiplication
  return typeof conversionRule === "function"
    ? conversionRule(value)
    : value * conversionRule;
}
