var readlineSync = require('readline-sync');


//printing quiz name
console.log("How well do you know Zuber!\n\n");

// Taking input adn showing output(rules, LeaderBoard blah blah)
var userName = readlineSync.question("May i know your name? \n");
console.log("Hey there "+ userName + " Welcome to the Quiz!\n")
console.log("________________________________________________\n")
console.log("Rules: \n1. There are 5 questions in this quiz.\n2. Each right answer will give you 1 points.\n3. 1 point will be deducted for each wrong answers.\n4. Use lowercase letters only (a or b).\n")

//Score Declaration
var score = 0;

//Creatig a function
function play(question, answer) {

// input
  var userAnswer = readlineSync.question(question);


// processing
  if (userAnswer === answer) {

// output
    console.log("Waah! You are right!");
    score = score + 1;
  } else {
   
 // output
    console.log("Nahi Yaaarr!!! Its Option " + answer);
    score = score - 1;
         }
  }

// Q1
var questionOne = "Which one is my fav?\na. Marvel\nb. DC \nAnswer : ";
var answerOne = "a";
//Calling function
play(questionOne, answerOne)

// Q2
var questionTwo = "\nWhich one is my fav?\na. Chai\nb. Coffee \nAnswer :  ";
var answerTwo = "a";
//Calling function
play(questionTwo, answerTwo)

// Q3
var questionThree = "\nAm I \na. Right handed\nb. Left Handed \nAnswer :  ";
var answerThree = "a";
//Calling function
play(questionThree, answerThree)

// Q4
var questionFour = "\nMy Birth Year?\na. 2000\nb. 2001 \nAnswer :  ";
var answerFour = "b";
//Calling function
play(questionFour, answerFour)

// Q45
var questionFive = "\nWhere did i spent my childhood?\na. Akola\nb. Yavatmal \nAnswer :  ";
var answerFive = "b";
//Calling function
play(questionFive, answerFive)



//printing final score
console.log("\nYour Final Score is: " + score)
if (score === 5){
  console.log("\nEk Tu Hi Yaar Mere <3\n")
}
else{
  console.log("\nBewaffa Insaan, Dost Mat Bolna mujhe jb tk 5 ke 5 sahi na aaye!")
}