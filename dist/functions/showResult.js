import { operation } from "./operation.js";
export const showResult = (Elements) => {
    if (Elements[1] && Elements[0]) {
        const operator = Elements[1].innerHTML.slice(-1);
        const a = parseFloat(Elements[1].innerHTML);
        const b = parseFloat(Elements[0].innerHTML);
        if ((Elements[1].innerHTML === "" && isNaN(a)) || isNaN(b))
            return;
        const result = operation(a, b, operator);
        if (result && result.toString().length > 18) {
            Elements[0].innerHTML = result.toString();
        }
        else if (result) {
            Elements[0].innerHTML = result.toString();
        }
        Elements[1].innerHTML = "";
    }
};
