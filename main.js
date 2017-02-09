/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/
console.log("Welcome Nkem")
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");
// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.
function minimum(a,b){
  if (a>b){document.getElementById("q1").innerHTML = "The smaller number between "+ a +" and "+ b + " is "+b}
  else {document.getElementById("q1").innerHTML = "The smaller number between "+ a +" and "+ b + " is "+a}
}
minimum(10,20)


// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.
function minimum3(a,b,c){
  if (a<b && a<c){document.getElementById("q2").innerHTML = "The smallest number between "+ a +", "+b+" and "+ c + " is "+a}
  else if (b<a && b<c){document.getElementById("q2").innerHTML = "The smallest number between "+ a +", "+b+" and "+ c + " is "+b}
  else {document.getElementById("q2").innerHTML = "The smallest number between "+ a +", "+b+" and "+ c + " is "+c}
}
minimum3(100,20,15)



// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.
function sum(array){
  sum_array = 0;
  for (i=0; i<array.length; i++){sum_array = sum_array+array[i]};
  document.getElementById("q3").innerHTML = "The sum of " +array+ " is "+sum_array;
}
sum([1, 2, 3, 4])



// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.
function multiply(array){
  multiply_array = 1;
  for (i=0; i<array.length; i++){multiply_array = multiply_array*array[i]};
  document.getElementById("q4").innerHTML = "The product of " +array+ " is "+multiply_array;
}
multiply([1, 2, 3, 4])


// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];
var filtered = [];
function filterSixPlus(array){
  for (i = 0; i<array.length; i++){
    if (array[i].length >= 6) {filtered.push(array[i])}
  }
  return filtered
}
document.getElementById("q5").innerHTML = filterSixPlus(words);

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.
function celsiusToFahrenheit(tempC){
  tempF = Number(tempC) * 1.8 + 32
  return tempF
}
var tempC = 100;
document.getElementById("q6").innerHTML = tempC + " celcius is " + celsiusToFahrenheit(tempC) + " fahrenheits."


// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.
function tempConvert() {
  document.getElementById("CtoF").addEventListener("click", function() {
  var tempC = document.getElementById("temperature").value;
  tempF = Number(tempC) * 1.8 + 32
  document.getElementById("q7").innerHTML = tempF.toFixed(2)+" F"
});

document.getElementById("FtoC").addEventListener("click", function() {
var tempF = document.getElementById("temperature").value;
tempC = (Number(tempF) - 32) * (5/9)
document.getElementById("q7").innerHTML = tempC.toFixed(2)+" C"
});
}
tempConvert()


// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
function countBs(input_string){
  count = 0
  for (i = 0; i<input_string.length; i++){
    if (input_string[i] == "B"){count = count+1}
  }
  return count
}
var input = "Big Boys in the Hood"
document.getElementById("q8").innerHTML = "There are " +countBs(input)+" uppercase B's in the following sentence: "+input



// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these!
//    Get as far as you can and record your progress and time.
//    We'll try this again in a few weeks!



// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.

function countChars(input_string,char){
  count = 0
  for (i = 0; i<input_string.length; i++){
    if (input_string[i] == char){count = count+1}
  }
  return count
}
var input = "cars can move quickly"
var char = "c"
document.getElementById("q10").innerHTML = "There are " +countChars(input,char)+ " "+char+ "'s  in the following sentence: "+input


// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.
function ohZero(input_string){
  input_string_ = input_string.replace(/o/g,"0")
  // for (i = 0; i<input_string.length; i++){
  //   if (input_string[i] == "o"){input_string[i]="0"}
  // }
  return input_string_
}
var input = "on my way to get oranges"
document.getElementById("q11").innerHTML = input + " converts to: " +ohZero(input)




// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.






// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.

function guessingGame() {
  var target = Math.floor(Math.random()*19)+1
  var count = 0
  document.getElementById("playGuess").addEventListener("click", function() {
  var guess = document.getElementById("guess").value;
  count = count+1;
  if (guess < 1 || guess > 20){document.getElementById("q13").innerHTML ="Guess is out of range. Guess a number between 1 and 20"}
  else if (guess == target) {document.getElementById("q13").innerHTML ="You guessed " + target + " correctly in " + count + " attempts!"}
  else if (guess > target) {document.getElementById("q13").innerHTML ="Your guess is too high; try again."}
  else if (guess < target) {document.getElementById("q13").innerHTML ="Your guess is too low; try again."}
});
}
guessingGame()
