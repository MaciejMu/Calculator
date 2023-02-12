import { currentNum } from "../app";
import { previousNum } from "../app";
import { updateOperator } from "../app";
export function clear() {
    if (currentNum && previousNum) {
        previousNum.innerHTML = currentNum.innerHTML = "";
        updateOperator("");
    }
}
