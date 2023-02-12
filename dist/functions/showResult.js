import { currentNum, updateOperator, previousNum } from "../app";
import { operation } from "./operation";
import { operator } from "../app";
export function showResult() {
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
        previousNum.innerHTML = "";
        updateOperator("");
    }
}
