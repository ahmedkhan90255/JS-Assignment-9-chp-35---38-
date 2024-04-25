document.write(
  "<h1> Write a function that computes factorial of a number. </h1>"
);

var inputNum = parseInt(
  prompt("Enter Any Number, I will give you it's factorial")
);

function factorial(inputNum) {
  if (inputNum === 0 || inputNum === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= inputNum; i++) {
      result *= i;
    }
    return result;
  }
}

// Example usage:
let number = inputNum;
let result = factorial(number);
document.write("<h2> The factorial of " + number + " is: " + result + "</h2>");
