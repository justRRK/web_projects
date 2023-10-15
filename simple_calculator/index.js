let displayBox = document.getElementById("displayBox");
let buttons = document.querySelectorAll("button");

let output = "";

buttons.forEach((element) => {
  element.addEventListener("click", (btn) => {
    if (btn.target.innerText == "ANS") {
      output = String(eval(output));
      if (output != typeof undefined) {
        displayBox.value = output;
      } else {
        output = "";
      }
    } else if (btn.target.innerText == "AC") {
      output = "";
      displayBox.value = output;
    } else if (btn.target.innerText == "DEL") {
      output = output.substring(0, output.length - 1);
      displayBox.value = output;
    } else {
      output += btn.target.innerText;
      displayBox.value = output;
    }
  });
});
