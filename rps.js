const rps = (p1, p2) => {
  let winner = "";

  switch (p1) {
    case "rock":
      if (p2 === "paper") {
        winner = `Player 2 won!`;
      } else if (p2 == "rock") {
        winner = `Draw!`;
      } else {
        winner = `Player 1 won!s`;
      }
      break;
    case "paper":
      if (p2 === "paper") {
        winner = `Draw!`;
      } else if (p2 == "rock") {
        winner = `Player 1 won!`;
      } else {
        winner = `Player 2 won`;
      }
      break;
    case "scissors":
      if (p2 === "paper") {
        winner = `Player 1 won!`;
      } else if (p2 == "rock") {
        winner = `Player 2 won!`;
      } else {
        winner = `Draw!`;
      }
      break;
  }

  return winner;
};

console.log("====================================");
console.log(rps("rock", "scissors"));
console.log(rps("rock", "paper"));
console.log(rps("paper", "rock"));
console.log(rps("paper", "scissors"));
console.log("====================================");
