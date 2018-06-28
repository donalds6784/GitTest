//==========================================================================
//A program that calculates and shows the value of 210 (2 to the 10th power).
//==========================================================================
//Using While loop
/*let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024*/

// using for loop
/*let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024
*/
//===========================================================
// A program that prompts a user to input a name in the field.
//============================================================
/*let yourName;
do{
    yourName = prompt('Who are you.?');
} while (!yourName) {
    console.log(yourName);
}*/

//=========================================================
// A switch program to let you know of what to wear during 
//=========================================================
switch (prompt("What is the weather like?")) {
    case "rainy":
      console.log("Remember to bring an umbrella.");
      break;
    case "sunny":
      console.log("Dress lightly.");
    case "cloudy":
      console.log("Go outside.");
      break;
    default:
      console.log("Unknown weather type!");
      break;
  }