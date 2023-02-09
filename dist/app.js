"use strict";
const currentNum = document.querySelector(".current");
const previousNum = document.querySelector(".previous");
const clearBtn = document.querySelector(".btn_C");
const equalBtn = document.querySelector(".btn_equal");
const numbersBtns = [...document.querySelectorAll(".btn_num")];
const operatorBtns = [...document.querySelectorAll(".btn_operator")];
numbersBtns.forEach((button) => button.addEventListener("click", dislpayNum));
operatorBtns.forEach((button) => button.addEventListener("click", operate));
equalBtn?.addEventListener("click", showResult);
clearBtn?.addEventListener("click", clear);
let operator;
function dislpayNum() {
    if (currentNum) {
        if (this.textContent === "." && currentNum.innerHTML.includes("."))
            return;
        if (this.textContent === "." && currentNum.innerHTML === "")
            return (currentNum.innerHTML = "0.");
        if (currentNum.innerHTML.length < 15)
            currentNum.innerHTML += this.textContent;
    }
}
function operate() {
    if (currentNum && previousNum) {
        if (this.textContent === "-" && currentNum.innerHTML === "") {
            return (currentNum.innerHTML = "-");
        }
        else if (currentNum.innerHTML === "")
            return;
        if (previousNum.innerHTML !== "") {
            showResult();
        }
        previousNum.innerHTML = currentNum.innerHTML + this.textContent;
        currentNum.innerHTML = "";
        operator = this.textContent;
    }
}
function showResult() {
    if (currentNum && previousNum) {
        const a = parseFloat(previousNum.innerHTML);
        const b = parseFloat(currentNum.innerHTML);
        if ((previousNum.innerHTML === "" && isNaN(a)) || isNaN(b))
            return;
        const result = operation(a, b, operator);
        if (result.toString().length > 18) {
            currentNum.innerHTML = result.toString();
        }
        else {
            currentNum.innerHTML = result.toString();
        }
        previousNum.innerHTML = operator = "";
    }
}
function operation(a, b, operator) {
    return operator === "+" ? a + b : a - b;
}
function clear() {
    if (currentNum && previousNum) {
        previousNum.innerHTML = currentNum.innerHTML = operator = "";
    }
}
