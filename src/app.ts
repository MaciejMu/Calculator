import { displayNum } from "./functions/displayNum.js";
import { operate } from "./functions/operate.js";
import { showResult } from "./functions/showResult.js";
import { clear } from "./functions/clear.js";

export const currentNum = document.querySelector(
  ".current"
) as HTMLButtonElement;
export const previousNum = document.querySelector(
  ".previous"
) as HTMLButtonElement;

const clearBtn = document.querySelector(".btn_C") as HTMLButtonElement;
const equalBtn = document.querySelector(".btn_equal") as HTMLButtonElement;

const numbersBtns = [
  ...document.querySelectorAll(".btn_num"),
] as HTMLButtonElement[];
const operatorBtns = [
  ...document.querySelectorAll(".btn_operator"),
] as HTMLButtonElement[];

numbersBtns.forEach((button) => button.addEventListener("click", displayNum));
operatorBtns.forEach((button) => button.addEventListener("click", operate));
equalBtn.addEventListener("click", showResult);
clearBtn.addEventListener("click", clear);
