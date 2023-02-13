export const clear = (ElementsToClear, defaultInput = "") => {
    ElementsToClear.forEach((element) => (element.innerHTML = defaultInput));
};
