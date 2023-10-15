let displayBox = document.getElementById("displayBox");
let buttons = document.querySelectorAll("button");

let output = "";
let isOperator = false;
let isAns = false;
let isDecimal = false;

buttons.forEach((element) => {
  element.addEventListener("click", (btn) => {
    if (btn.target.innerText == "ANS") {
      output = String(eval(output));
      if (output != typeof undefined) {
        displayBox.value = output;
        isAns = true;
      } else {
        output = "";
      }
    } else if (btn.target.innerText == "AC") {
      output = "";
      displayBox.value = output;
      isAns = false;
      isOperator = false;
      isDecimal = false;
    } else if (btn.target.innerText == "DEL") {
      if (output[output.length - 1] == ".") {
        isDecimal = false;
      }
      output = output.substring(0, output.length - 1);
      displayBox.value = output;
      isAns = false;
      isOperator = false;
    } else if (btn.target.innerText == ".") {
      if (!isDecimal) {
        isDecimal = true;
        isOperator = false;
        output += btn.target.innerText;
        displayBox.value = output;
        isAns = false;
      }
    } else if (btn.target.className != "operator") {
      if (isAns) {
        output = "";
      }
      isOperator = false;
      output += btn.target.innerText;
      displayBox.value = output;
      isAns = false;
    } else if (!isOperator) {
      isOperator = true;
      output += btn.target.innerText;
      displayBox.value = output;
      isAns = false;
      isDecimal = false;
    }
  });
});
