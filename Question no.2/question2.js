document.write(
  "<h1> Write a function that takes first & last name and then it <br> greets the user using his full name. </h1>"
);
var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
function greet() {
    document.write("<h2>Asslamoalaikum " + firstName + lastName + "</h2>" )
}
greet()
