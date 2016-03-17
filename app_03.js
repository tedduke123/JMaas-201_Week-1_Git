// Codefellows-201 March 2016
// JMaas Week1-day-3 Wednesday Lab Assignment:

// this function ensures that the html-page is fully loaded before the pop-up windows start:
//window.onload() = function() {

// declare variables for textContent-functions below:
var question_1 = document.getElementById('question_1');
var question_2 = document.getElementById('question_2');
var question_3 = document.getElementById('question_3');
var question_4 = document.getElementById('question_4');
var question_5 = document.getElementById('question_5');

// Question 00:  Introduction and Name

var userName = prompt('Welcome to the PINGU PROFILE page! Have a look around - when You are ready to take the Quiz enter Your name to start:');

console.log('Welcome message prompt - User asked to enter name');
console.log('The user said there name is: <<<< ' + userName + ' >>>>');

alert('Hello ' + userName + ', This Guessing game will be fun! Please click "ok" to go ahead, then answer the first question.');

// Question 01:  Made with CG-Animation? // puppets or CG answer, check for first letter

var keepAsking_01 = true;

while (keepAsking_01) {
  var question_1_Response = prompt('Alright ' + userName + ' ,This is a difficult one: Was Pingu animated in CG-Animation or with puppets?  Please type only one single word as your answer:');
  console.log('userResponse: ' + question_1_Response);

  var userResponse = question_1_Response.slice(0, 1);  //slices of the first character from the user input.  'c' = CG-Animation and 'p' = puppets.

  if (userResponse.toLowerCase() === 'c') {
    alert('No, sorry, all the puppets and sets in Pingu are handmade!');
    question_1.textContent = 'No, sorry, all the puppets and sets in Pingu are handmade!';
    keepAsking_01 = false;

} else if (userResponse.toUpperCase() === 'P') {
    alert('Yes! Pingu was made using traditional Stop-Motion!');
    question_1.textContent = 'Yes! Pingu was made using traditional Stop-Motion!';
    keepAsking_01 = false;

    } else {
    alert("Sorry, I didn't understand your answer. Please try again and only one word:");
    console.log("---- User Input error -----");
    };
};

// Question 02:  Born at South-Pole?

var keepAsking_02 = true;

while (keepAsking_02) {
  var userResponse = prompt('So tell me ' + userName + ' , was Pingu born at the North-Pole?  Please answer "Yes" or "No":');
  console.log('userResponse: ' + userResponse);

  if (userResponse.toLowerCase() === 'n' || userResponse.toLowerCase() === 'no') {
    alert('YES! That is correct. Penguins are only found at the South-Pole.');
    question_2.textContent = 'YES! That is correct. Penguins are only found at the South-Pole.';
    keepAsking_02 = false;

} else if (userResponse.toUpperCase() === 'Y' || userResponse.toUpperCase() === 'YES') {
    alert('No! Penguins only live at the South-Pole!');
    question_2.textContent = 'No! Penguins only live at the South-Pole!';
    keepAsking_02 = false;

    } else {
    alert("Sorry, I didn't understand your answer. Please try again and only type 'Yes' or 'No':");
    console.log("---- User Input error -----");
    };
};

// Question 03:  Is Pinga Pigu's best friend?

var keepAsking_03 = true;

while (keepAsking_03) {
  var userResponse = prompt('Is Pinga Pingu\'s sister? Please answer "Yes" or "No": ');
  console.log('userResponse: ' + userResponse);

  if (userResponse.toLowerCase() === 'n' || userResponse.toLowerCase() === 'no') {
    alert('WRONG! she really is his sister! ');
    question_3.textContent = 'WRONG! she really is his sister! ';
    keepAsking_03 = false;

} else if (userResponse.toUpperCase() === 'Y' || userResponse.toUpperCase() === 'YES') {
    alert('Yes ! That is Correct!');
    question_3.textContent = 'Yes ! That is Correct!';
    keepAsking_03 = false;

    } else {
    alert("Sorry, I didn't understand your answer. Please try again and only type 'Yes' or 'No':");
    console.log("---- User Input error -----");
    };
};

// Question 04:

// Questijo 05:




//};   // window.onload function (above) closing brackets
