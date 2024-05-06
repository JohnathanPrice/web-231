"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Johnathan Price
      Date:   5/5/2024

      Filename: project05-01.js
*/

// Declare the timeID variable
let timeID;
// Declare questionList and using queryselectorall use css selector
const questionList = document.querySelectorAll('div#quiz input');

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;


// Add onclick event handler to startQuiz object
startQuiz.onclick = function() {
  overlay.className = "showquiz"; // Set class attribute of overlay object to "showquiz"
  timeID = setInterval(countdown, 1000); // Repeat the countdown() function every 1 second
};

// Declare the countdown() function
function countdown() {
  if (timeLeft === 0) {
    clearInterval(timeID); // Cancel the timed command with the variable timeID
    var totalCorrect = checkAnswers(); // Declare variable totalCorrect and set it equal to the value returned by checkAnswers() function
    if (totalCorrect === correctAnswers.length) {
      // If totalCorrect is equal to the length of the correctAnswers array
      alert("Congratulations! You got 100%"); // Display congratulatory alert
    } else {
      // If totalCorrect is not equal to the length of the correctAnswers array
      alert("You got " + (correctAnswers.length - totalCorrect) + " incorrect out of " + correctAnswers.length + " questions."); // Display alert indicating number of incorrect answers
      timeLeft = quizTime; // Change value of timeLeft variable to quizTime
      quizClock.value = timeLeft; // Set quizClock.value to the value of the timeLeft variable
      overlay.className = "hidequiz"; // Change class attribute of overlay object to "hidequiz"
    }
  } else {
    // If timeLeft variable is not equal to 0
    timeLeft--; // Decrease the value of timeLeft by 1
    quizClock.value = timeLeft; // Set quizClock.value to the value of the timeLeft variable
  }
}



















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}

