import { dislpayNum } from "./functions/displayNum";
import { operate } from "./functions/operate";
import { showResult } from "./functions/showResult";
import { clear } from "./functions/clear";
export const currentNum = document.querySelector(".current");
export const previousNum = document.querySelector(".previous");
const clearBtn = document.querySelector(".btn_C");
const equalBtn = document.querySelector(".btn_equal");
const numbersBtns = [...document.querySelectorAll(".btn_num")];
const operatorBtns = [...document.querySelectorAll(".btn_operator")];
export let operator;
export function updateOperator(operatorSign) {
    operator = operatorSign;
}
numbersBtns.forEach((button) => button.addEventListener("click", dislpayNum));
operatorBtns.forEach((button) => button.addEventListener("click", operate));
equalBtn?.addEventListener("click", showResult);
clearBtn?.addEventListener("click", clear);
