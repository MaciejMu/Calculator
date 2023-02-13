import { displayNum } from "./functions/displayNum.js";
import { operate } from "./functions/operate.js";
import { showResult } from "./functions/showResult.js";
import { clear } from "./functions/clear.js";
const currentNum = document.querySelector(".current");
const previousNum = document.querySelector(".previous");
const clearBtn = document.querySelector(".btn_C");
const equalBtn = document.querySelector(".btn_equal");
const numbersBtns = [
    ...document.querySelectorAll(".btn_num"),
];
const operatorBtns = [
    ...document.querySelectorAll(".btn_operator"),
];
numbersBtns.forEach((button) => button.addEventListener("click", () => {
    displayNum(button, [currentNum]);
}));
operatorBtns.forEach((button) => button.addEventListener("click", () => operate(button, [currentNum, previousNum])));
equalBtn.addEventListener("click", () => showResult([currentNum, previousNum]));
clearBtn.addEventListener("click", () => clear([currentNum, previousNum]));
