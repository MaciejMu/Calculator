import { currentNum } from "../app.js";
import { previousNum } from "../app.js";
export function clear() {
    if (currentNum && previousNum) {
        previousNum.innerHTML = currentNum.innerHTML = "";
    }
}
