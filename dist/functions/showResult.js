import { currentNum, previousNum } from "../app.js";
import { operation } from "./operation.js";
export function showResult() {
    if (currentNum && previousNum) {
        const operator = previousNum.innerHTML.slice(-1);
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
    }
}
