let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

//win or loss checker and editing main CSS/HTML
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win");
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose");
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;

    msg.style.backgroundColor = "red";
  }
};

//draw system
const drawGame = () => {
  console.log("game was a draw");
  msg.innerText = "Game was drawn, play again.";
  msg.style.backgroundColor = "#6565f0";
};

//checking for user choice through choice DOM
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

//computer choice generator using arrays and math randomizer
const genCompChoice = () => {
  const options = ["rock", "paper", "caesar"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

//main function and loop
const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("compChoice =", compChoice);

  //bunch of if else statements to compare
  //userchoice & comp choice and determine the winner

  if (userChoice === compChoice) {
    drawGame();
  } else {
    //paper scissor
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else {
      //scissor, rock
      if (userChoice === "paper") {
        userWin = compChoice === "caesar" ? false : true;
      } else {
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
  }
};
//music control
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle-btn");

let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    toggleBtn.innerText = "Music On";
    toggleBtn.style.backgroundColor = "green";
  } else {
    music.play();
    toggleBtn.innerText = "Music Off";
    toggleBtn.style.backgroundColor = "red";
  }
  isPlaying = !isPlaying;
});
