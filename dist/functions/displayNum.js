import { currentNum } from "../app.js";
export function dislpayNum() {
    if (currentNum) {
        if (this.textContent === "." && currentNum.innerHTML.includes("."))
            return;
        if (this.textContent === "." && currentNum.innerHTML === "")
            return (currentNum.innerHTML = "0.");
        if (currentNum.innerHTML.length < 15)
            currentNum.innerHTML += this.textContent;
    }
}
