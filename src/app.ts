import { dislpayNum } from "./functions/displayNum.js";
import { operate } from "./functions/operate.js";
import { showResult } from "./functions/showResult.js";
import { clear } from "./functions/clear.js";

export const currentNum = document.querySelector(".current");
export const previousNum = document.querySelector(".previous");

const clearBtn = document.querySelector(".btn_C");
const equalBtn = document.querySelector(".btn_equal");
const numbersBtns = [...document.querySelectorAll(".btn_num")];
const operatorBtns = [...document.querySelectorAll(".btn_operator")];

numbersBtns.forEach((button) => button.addEventListener("click", dislpayNum));
operatorBtns.forEach((button) => button.addEventListener("click", operate));
equalBtn?.addEventListener("click", showResult);
clearBtn?.addEventListener("click", clear);
