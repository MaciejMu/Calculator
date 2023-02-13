export const operation = (
  a: number,
  b: number,
  operator: string
): number | void => {
  // return operator === "+" ? a + b : a - b;
  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    default:
      return;
  }
};
