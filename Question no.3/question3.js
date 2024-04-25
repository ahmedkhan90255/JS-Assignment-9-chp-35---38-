document.write("<h1> Write a function that adds two numbers (input by user) <br> and returns the sum of two numbers. </h1>")

var firstNum = parseInt(prompt("Enter First Number"))
var secondNum = parseInt(prompt("Enter Second Number"))


function Sum() {
    var inputSum = firstNum + secondNum
    var inputSum1 = firstNum - secondNum
    var inputSum2 = firstNum * secondNum
    var inputSum3 = firstNum / secondNum
    
    document.write("<h2>"+ firstNum + " + " + secondNum + " = " +inputSum + "</h2>")
    document.write("<h2>"+ firstNum + " - " + secondNum + " = " +inputSum1 + "</h2>")
    document.write("<h2>"+ firstNum + " * " + secondNum + " = " +inputSum2 + "</h2>")
    document.write("<h2>"+ firstNum + " / " + secondNum + " = " +inputSum3 + "</h2>")
}

Sum()