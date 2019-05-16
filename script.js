const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".reult");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

//this function makes the computer choose an option
function getComputerChoice() {
const choices = ['r', 'p', 's'];
const randomNumber =Math.floor(Math.random() * 3);
return choices[randomNumber];
}

//when click on object it projects the name of the object
function convertToWord(letter) {
if (letter === "r") return "Rock"
if (letter === "p") return "Paper"
return "Scissors";
}

//what it says when the user wins
function win(userChoice, computerChoice) {
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". YOU WIN!";
}

//what it says when the function loses
function lose(userChoice, computerChoice) {
computerScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + ". YOU LOSE!";
}

//when it is a tie
function draw(userChoice, computerChoice) {
result_p.innerHTML = convertToWord(computerChoice) + " equals " + convertToWord(userChoice) + ". DRAW!";
}

//scenarios that could happen during the game
function game(userChoice) {
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
case "rs":
case "pr":
case "sp":
win(userChoice, computerChoice);
break;
case "rp":
case "ps":
case "sr":
lose(userChoice, computerChoice);
break;
case "rr":
case "pp":
case "ss":
draw(userChoice, computerChoice)
break;
}
}

//register input from a click
function main() {
rock_div.addEventListener('click', function() {
  game("r");
})

paper_div.addEventListener('click', function() {
  game("p");
})

scissors_div.addEventListener('click', function() {
  game("s");
})
}

main();
