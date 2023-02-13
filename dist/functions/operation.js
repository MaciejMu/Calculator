export const operation = (a, b, operator) => {
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
