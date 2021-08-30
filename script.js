"user script";
console.log("Xochilt Garcia");

let num = prompt(
  "What's the course number for Digital Media Programming? Ex.IMED",
  ""
);

if (num == 2351) {
  alert("You guessed it right, course is IMED-2351");
  document.write(
    "Yay! You are eligible for the Disney bundle student disocunt!"
  );
} else {
  alert("Sorry, access has been denied"); // any value except 2351
}

var price1 = 13.99;
var price2 = 9.99;
var total = price1 - price2;
"Total discount: " + total;
