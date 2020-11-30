var userPoints = 0;
var computerPoints = 0;

$(document).ready(function () {

// Events
    $("img").click(game);
    $("img").click(winner);

// Functions
    function game() {

// User option
        var userOption = $(this).data("option");

        $("#userYield").text(`You selected ${userOption}`);

// Computer option
        var computerOption = Math.floor(Math.random() * 5) + 1;

// Value
        if (computerOption === 1) {
            computerOption = "Rock";
        } else if (computerOption === 2) {
            computerOption = "Paper";
        } else if (computerOption === 3) {
            computerOption = "Scissors";
        } else if (computerOption === 4) {
            computerOption = "Lizard";
        } else if (computerOption === 5) {
            computerOption = "Spock";
        }

        $("#computerYield").text(`Computer selected ${computerOption}`);


// Unique id
        var combineOptions = userOption + computerOption;

// What will happen if you select rock
        if (combineOptions === "RockRock") {
            // Tie Game
            $("#resultYield").text("Tie!!!");
        } else if (combineOptions === "RockPaper") {
            // You lose
            computerPoints += 1;
            $("#resultYield").text("Paper covers rock. You have lost this round!");
        } else if (combineOptions === "RockScissors") {
            // You win
            userPoints += 1;
            $("#resultYield").text("Rock crushes scissors. You won this round!");
        } else if (combineOptions === "RockLizard") {
            // You win
            userPoints += 1;
            $("#resultYield").text("Rock crushes lizard. You have won this round!");
        } else if (combineOptions === "RockSpock") {
            // You lose
            computerPoints += 1;
            $("#resultYield").text("Spock vaporizes rock. You have lost this round!");
        }

// What will happen if you select Paper
        if (combineOptions === "PaperRock") {
            // You win
            userPoints += 1;
            $("#resultYield").text("Paper covers rock. You have win this round!");
        } else if (combineOptions === "PaperPaper") {
            // Tie Game
            $("#resultYield").text("Tie!!!");
        } else if (combineOptions === "PaperScissors") {
            // You lose
            computerPoints += 1;
            $("#resultYield").text("Scissors cuts paper. You have lost this round!");
        } else if (combineOptions === "PaperLizard") {
            // You lose
            computerPoints += 1;
            $("#resultYield").text("Lizard eats paper. You have lost this round!");
        } else if (combineOptions === "PaperSpock") {
            // You win
            userPoints += 1;
            $("#resultYield").text("Paper disproves spock. You have won this round!");
        }

// What will happen if you select Scissors
        if (combineOptions === "ScissorsRock") {
            // You lose
            computerPoints += 1;
            $("#resultYield").text("Rock crushes scissors. You have lost this round!");
        } else if (combineOptions === "ScissorsPaper") {
            // You win
            userPoints += 1;
            $("#resultYield").text("Scissors cuts paper. You have won this round!");
        } else if (combineOptions === "ScissorsScissors") {
            // Tie Game
            $("#resultYield").text("Tie!!!");
        } else if (combineOptions === "ScissorsLizard") {
            // You win
            userPoints += 1;
            $("#resultYield").text("Scissors decapitates lizard. You have won this round!");
        } else if (combineOptions === "ScissorsSpock") {
            // You lose
            computerPoints += 1;
            $("#resultYield").text("Spock smashes scissors. You have lost this round!");
        }

// What will happen if you select Lizard
        if (combineOptions === "LizardRock") {
            // User loses
            computerPoints += 1;
            $("#resultYield").text("Rock crushes lizard. You have lost this round!");
        } else if (combineOptions === "LizardPaper") {
            // You win
            userPoints += 1;
            $("#resultYield").text("Lizard eats paper. You have won this round!");
        } else if (combineOptions === "LizardScissors") {
            // User loses
            computerPoints += 1;
            $("#resultYield").text("Scissors decapitates lizard. You have lost this round!");
        } else if (combineOptions === "LizardLizard") {
            // Tie Game
            $("#resultYield").text("Tie!!!");
        } else if (combineOptions === "LizardSpock") {
            // You win
            userPoints += 1;
            $("#resultYield").text("Lizard poisons spock. You have won this round!");
        }

// What will happen if you select Spock
        if (combineOptions === "SpockRock") {
            // You win
            userPoints += 1;
            $("#resultYield").text("Spock vaporizes rock. You have won this round!");
        } else if (combineOptions === "SpockPaper") {
            // User loses
            computerPoints += 1;
            $("#resultYield").text("Paper disproves spock. You have lost this round!");
        } else if (combineOptions === "SpockScissors") {
            // You win
            userPoints += 1;
            $("#resultYield").text("Spock smashes scissors. You have won this round!");
        } else if (combineOptions === "SpockLizard") {
            // User loses
            computerPoints += 1;
            $("#resultYield").text("Lizard poisons spock. You have lost this round!");
        } else if (combineOptions === "SpockSpock") {
            // Tie Game
            $("#resultYield").text("Result is a Tie!");
        }

        $("#yourResult").text(userPoints.toFixed());
        $("#computerResult").text(computerPoints.toFixed());
    }

    function winner() {

        if (userPoints === 2) {
            $("#winnerYield").text("Congrats! You are the winner!");
        } else if (computerPoints === 2) {
            $("#winnerYield").text("I'm Sorry! The computer is the winner!");
        }
    }
});
