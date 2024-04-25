document.write("<h1> Write a function that squares its argument. </h1>");

var inputNum = parseInt(prompt("Enter Any Number"));

function TakingPower(inputNum) {
  var result = inputNum * inputNum;
  document.write(
    "<h2>Ans: The square of " + inputNum + " is " + result + "</h2>"
  );
}
TakingPower(inputNum);
