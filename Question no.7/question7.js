document.write(
  "<h1>  Write a function that take start and end number as inputs & display counting in your browser. </h1>"
);

var inputNum = parseInt(prompt("Enter Any Number"));

function counting() {
  for (i = 0; i <= inputNum; i++) {
    document.write("<h2>" + i + "<br></h2>");
  }
}
counting();
