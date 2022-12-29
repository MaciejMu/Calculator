const currentNum = document.querySelector(".current");
const previousNum = document.querySelector(".previous");
const numbersBtns = document.querySelectorAll(".btn_num");
const operatorBtns = document.querySelectorAll(".btn_operator");
const equalBtn = document.querySelector(".btn_equal");
const clearBtn = document.querySelector(".btn_C");

let result = "";
let operator = "";

///Listeners
numbersBtns.forEach((button) => button.addEventListener("click", dislpayNum));
operatorBtns.forEach((button) => button.addEventListener("click", operate));

equalBtn.addEventListener("click", showResult);
clearBtn.addEventListener("click", cleanScreen);

///Functions
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
  if (previousNum.innerHTML === "") return;
  const a = parseFloat(previousNum.innerHTML);
  const b = parseFloat(currentNum.innerHTML);
  if (isNaN(a) || isNaN(b)) return;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
  }

  currentNum.innerHTML = result;
  previousNum.innerHTML = "";
  operator = "";
}

function cleanScreen() {
  previousNum.innerHTML = "";
  currentNum.innerHTML = "";
  operator = "";
}
