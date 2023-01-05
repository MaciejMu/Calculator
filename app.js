//Selectors
function getElements(element) {
  return document.querySelector(element);
}
function getElementsAll(element) {
  return document.querySelectorAll(element);
}
const currentNum = getElements(".current");
const previousNum = getElements(".previous");
const numbersBtns = getElementsAll(".btn_num");
const operatorBtns = getElementsAll(".btn_operator");
const equalBtn = getElements(".btn_equal");
const clearBtn = getElements(".btn_C");

///Listeners functions
function addForEachListeners(selector, callback) {
  selector.forEach((button) => button.addEventListener("click", callback));
}

function addListener(selector, callback) {
  selector.addEventListener("click", callback);
}

addForEachListeners(numbersBtns, dislpayNum);
addForEachListeners(operatorBtns, operate);
addListener(equalBtn, showResult);
addListener(clearBtn, clear);

///Calc functions
function dislpayNum() {
  if (this.textContent === "." && currentNum.innerHTML.includes(".")) return;
  if (this.textContent === "." && currentNum.innerHTML === "")
    return (currentNum.innerHTML = "0.");
  if (currentNum.innerHTML.length < 15)
    currentNum.innerHTML += this.textContent;
}

function operate() {
  if (this.textContent === "-" && currentNum.innerHTML === "") {
    return (currentNum.innerHTML = "-");
  } else if (currentNum.innerHTML === "") return;
  if (previousNum.innerHTML !== "") {
    showResult();
  }
  previousNum.innerHTML = currentNum.innerHTML + this.textContent;
  currentNum.innerHTML = "";
  operator = this.textContent;
}

function showResult() {
  const a = parseFloat(previousNum.innerHTML);
  const b = parseFloat(currentNum.innerHTML);
  if ((previousNum.innerHTML === "" && isNaN(a)) || isNaN(b)) return;

  result = operation(a, b, operator);

  if (result.toString().length > 18) {
    currentNum.innerHTML = result.toPrecision(1);
  } else {
    currentNum.innerHTML = result;
  }
  previousNum.innerHTML = operator = "";
}

function operation(a, b, operator) {
  return operator === "+" ? a + b : a - b;
}

function clear() {
  previousNum.innerHTML = currentNum.innerHTML = operator = "";
}
