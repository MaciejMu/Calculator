import { showResult } from "./showResult.js";
export const operate = (button, elements, defaultInput = "") => {
    if (elements[0] && elements[1]) {
        if (button.textContent === "-" && elements[0].innerHTML === defaultInput) {
            return (elements[0].innerHTML = "-");
        }
        else if (elements[0].innerHTML === defaultInput)
            return;
        if (elements[1].innerHTML !== defaultInput) {
            showResult([elements[0], elements[1]]);
        }
        elements[1].innerHTML = elements[0].innerHTML + button.textContent;
        elements[0].innerHTML = defaultInput;
    }
};
