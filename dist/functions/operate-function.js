import { currentNum } from "../app";
import { previousNum } from "../app";
import { showResult } from "./showResult";
import { updateOperator } from "../app";
export function operate() {
    if (currentNum && previousNum) {
        if (this.textContent === "-" && currentNum.innerHTML === "") {
            return (currentNum.innerHTML = "-");
        }
        else if (currentNum.innerHTML === "")
            return;
        if (previousNum.innerHTML !== "") {
            showResult();
        }
        let operator;
        previousNum.innerHTML = currentNum.innerHTML + this.textContent;
        currentNum.innerHTML = "";
        updateOperator(this.textContent);
    }
}
