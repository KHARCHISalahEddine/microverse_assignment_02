function computerPlay() {
  const rps = ["Rock", "Paper", "Scissors"];
  return rps[Math.ceil(Math.random() * 10) % 3];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      return "You Lose! Paper beats Rock";
    }
    if (computerSelection == "Scissors") {
      return "You Win! Rock beats Scissors";
    }
    if (computerSelection == "Rock") {
      return "Rock both of You (*_*!)";
    }
  }
  if (playerSelection == "Paper") {
    if (computerSelection == "Paper") {
      return "Paper both of You (*_*!)";
    }
    if (computerSelection == "Scissors") {
      return "You Lose! Scissors beats Paper";
    }
    if (computerSelection == "Rock") {
      return "You Win! Paper beats Rock";
    }
  }
  if (playerSelection == "Scissors") {
    if (computerSelection == "Scissors") {
      return "Scissors both of You (*_*!)";
    }
    if (computerSelection == "Rock") {
      return "You Lose! Rock beats Scissors";
    }
    if (computerSelection == "Paper") {
      return "You Win! Scissors beats Paper";
    }
  }
}

function getChoice(choice){
  const rps = ["Rock", "Paper", "Scissors"];
  return rps[choice-1]
}

function game() {
  let report = [];
  let nbrYouWin = 0,
    nbrCompWin = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = getChoice(Number(window.prompt("Chose :\n1. Rock \n2. Paper \n3. Scissors")));
    let computerSelection = computerPlay();
    report.push(playRound(playerSelection, computerSelection));
    if (report[i].includes("Win")) nbrYouWin += 1;
    if (report[i].includes("Lose")) nbrCompWin += 1;
  }
  console.log(report);
  if (nbrYouWin > nbrCompWin) {
    console.log("You won the Game!");
  } else {
    console.log("You Losed the Game!");
  }
}

game();
