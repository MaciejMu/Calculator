export const clear = (ElementsToClear: HTMLDivElement[], defaultInput = "") => {
  ElementsToClear.forEach((element) => (element.innerHTML = defaultInput));
};
