// 
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded");

  var generateRandomNumber = function() {
    return parseInt(Math.random() * 10);
  }

// Takes the text in the tag, and returns it into a string. 
  var displayBalance = function(balance) {
    document.querySelector("#balance").innerText = balance;
  }

// Sets the balance and displays the balance.
  var balance = 100;
  displayBalance(balance);

// Need the .value because the it is a user input field
  var getInputs = function() {
    var bet, guess;
    bet = document.querySelector("#bet").value;
    bet = parseInt(bet);

    guessElement = document.querySelector("#guess");

    if(guessElement) {
      guess = guessElement.value
      guess = parseInt(guess);
    }

    // FIXME: Add function to validate inputs here
    return {bet: bet, guess: guess};
  }

  var playRound = function(e) {
  e.stopPropagation(); // prevent the event from bubbling up to parent DOM elements

    var inputs = getInputs();
    var randomNumber = generateRandomNumber();

    if(inputs.guess === randomNumber) {
      balance += inputs.bet * 2;
    } else if(Math.abs(inputs.guess - randomNumber) === 1) {
      console.log("You are one off. You get your money back");
    } else {
      balance -= inputs.bet;
    }
    displayBalance(balance);
  }

  // Play the round as soon as the user is done filling out the second input field
  // document.querySelector("#number").addEventListener("blur", playRound);
  document.querySelector("button").addEventListener("click", playRound);
  document.querySelector("#game_area").addEventListener("click", function(e) {
    console.log("game area caught click");
  });
 
  // $("button").on("click", playRound);
  // document.querySelector("button").addEventListener("click", function() {
  //   playRound();
  // });
});
console.log("Outside DOM loaded");