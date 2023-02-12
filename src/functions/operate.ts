import { currentNum, previousNum } from "../app.js";
import { showResult } from "./showResult.js";

export function operate() {
  if (currentNum && previousNum) {
    if (this.textContent === "-" && currentNum.innerHTML === "") {
      return (currentNum.innerHTML = "-");
    } else if (currentNum.innerHTML === "") return;
    if (previousNum.innerHTML !== "") {
      showResult();
    }
    previousNum.innerHTML = currentNum.innerHTML + this.textContent;
    currentNum.innerHTML = "";
  }
}
