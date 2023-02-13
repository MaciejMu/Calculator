export const displayNum = (button, ElementsToDisplay, decimalPoint = ".") => {
    if (ElementsToDisplay[0]) {
        if (button.textContent === decimalPoint &&
            ElementsToDisplay[0].innerHTML.includes(decimalPoint))
            return;
        if (button.textContent === decimalPoint &&
            ElementsToDisplay[0].innerHTML === "")
            return (ElementsToDisplay[0].innerHTML = "0.");
        if (ElementsToDisplay[0].innerHTML.length < 15)
            ElementsToDisplay[0].innerHTML += button.textContent;
    }
};
