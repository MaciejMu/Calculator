const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let calculations = [];
let joinedCalc;

function calculate(button) {
  const value = button.textContent;

  if (value === "C") {
    calculations = [];
    display.textContent = "0";
  } else if (value === "=") {
    display.textContent = eval(joinedCalc);
    calculations = [display.textContent];
  } else if (calculations.length < 20) {
    calculations.push(value);
    joinedCalc = calculations.join("");
    display.textContent = joinedCalc;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
