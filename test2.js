// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the dice images
  var dice1 = document.getElementById("dice1");
  var dice2 = document.getElementById("dice2");

  // Get reference to the roll button
  var rollButton = document.getElementById("rollButton");

  // Get reference to the reset button
  var resetButton = document.getElementById("resetButton");

  // Get reference to the result element
  var resultElement = document.getElementById("result");

  // Get reference to the ledger
  var ledger = document.getElementById("ledger");

  // Attach event listener to the roll button
  rollButton.addEventListener("click", rollDice);

  // Attach event listener to the reset button
  resetButton.addEventListener("click", resetGame);

  // Function to roll the dice
  function rollDice() {
    // Generate random numbers between 1 and 6
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Update the dice images
    dice1.src = "dice" + randomNumber1 + ".png";
    dice2.src = "dice" + randomNumber2 + ".png";

    // Calculate the sum of the dice
    var sum = randomNumber1 + randomNumber2;

    // Display the sum
    resultElement.innerHTML = `Sum: ${sum}`;

    // Check game outcome
    if (sum === 7 || sum === 11) {
      resultElement.innerHTML += "<br>Player LOSES!";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      resultElement.innerHTML += "<br>Player WINS!";
    } else {
      resultElement.innerHTML += "<br>Roll again!";
    }

    // Add result to the ledger
    var resultEntry = document.createElement("div");
    resultEntry.className = "result-entry";
    resultEntry.innerHTML = `Dice 1: ${randomNumber1} + Dice 2: ${randomNumber2} = ${sum} - ${sum === 7 || sum === 11 ? "Player LOSES!" : sum === 2 || sum === 3 || sum === 12 ? "Player WINS!" : "Roll again!"}`;
    ledger.prepend(resultEntry);
  }

  // Function to reset the game
  function resetGame() {
    dice1.src = "dice1.png";
    dice2.src = "dice1.png";
    resultElement.innerHTML = "";
    ledger.innerHTML = "";
  }
});
