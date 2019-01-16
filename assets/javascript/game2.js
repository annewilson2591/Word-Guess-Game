//variables 
var word = ["yellowstone", "denali","zion","sequoia","badlands", "yosemite", "grandcanyon"];
var actualWord = "";
var letters= [];
var output = [];
var wrongLetters = [];

var num = 0;
var guessesLeft = 12;
var losses = 0;
var wins= 0;


function gameStart() {
  //select random word
  actualWord = word[Math.floor(Math.random() * word.length)];
  //split letters
  letters = actualWord.split("");
  //string length property 
  num = letters.length;

  // console.log(num);
  // console.log(letters);
  // console.log(actualWord)

  guessesLeft = 12;
  wrongLetters = [];
  output = [];

  //input random, split word, output underscore of letters
  for(var i = 0; i < num; i++) {
    output.push("_")
    console.log(output)
  }
         
  document.getElementById("nationalPark").innerHTML = output.join(" ");
  document.getElementById("game").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;

};
  

function checkAnswer (letter) {

var letterInWord = false;

for(var j = 0; j < num; j++) {

  if (letter == actualWord[j]) {
    letterInWord = true;
  }
}

if (letterInWord) {
  for(var j = 0; j < num; j++) {
    if (actualWord[j] == letter) {
      output[j] = letter;
      console.log(output)
    }         
  }
} else {
    wrongLetters.push(letter);
    guessesLeft--;
}

};


gameStart();


function rounds() {
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("answersGuessed").innerHTML = wrongLetters;
document.getElementById("nationalPark").innerHTML = output.join(" ");
 
if(letters.toString() == output.toString()) {
  wins++
  document.getElementById("game").innerHTML = wins;
  play();
} else if (guessesLeft===0) {
    losses++
    document.getElementById("losses").innerHTML = losses;
    gameStart();
}
};

//event listener
document.onkeypress = function(event) {
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
console.log(userGuess);
checkAnswer(userGuess);
rounds();
};


// //end



