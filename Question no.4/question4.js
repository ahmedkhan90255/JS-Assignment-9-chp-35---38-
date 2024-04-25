document.write("<h1> Calculator </h1>");

var num1 = parseInt(prompt("Enter any number"));

var operator = prompt("Enter Arithmetic Operator");
var num2 = parseInt(prompt("Enter Second Number"));
function Calculator() {
  if (operator === "+") {
    var sum1 = num1 + num2;
    document.write("<h2>" + num1 + " + " + num2 + " = " + sum1 + "</h2>");
  } else if (operator === "-") {
    var sum2 = num1 - num2;
    document.write("<h2>" + num1 + " - " + num2 + " = " + sum2 + "</h2>");
  } else if (operator === "*") {
    var sum3 = num1 * num2;
    document.write("<h2>" + num1 + " * " + num2 + " = " + sum3 + "</h2>");
  } else if (operator === "/") {
    var sum4 = num1 / num2;
    document.write("<h2>" + num1 + " / " + num2 + " = " + sum4 + "</h2>");
  } else {
    alert("Invalid Arithmetic Operator, Only '+, -, *, /' is allowed!");
  }
}
Calculator();
