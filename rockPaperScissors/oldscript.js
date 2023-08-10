        //Initialize the playerScore and ComputerScore variables
        let playerScore = 0;
        let computerScore = 0;


        //Write a function that gives us a random choice from the possibilities for this game
        function getComputerChoice() {
            
            const arr = ["Rock", "Paper", "Scissors"];
            const choices = arr[Math.floor(Math.random() * arr.length)];
            return choices;  
  
        }

        
        //Write a function that will simulate a one-round game
        function singleRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                console.log ("Draw");
            } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "scissors")) {
                console.log ("Player WINS! Rock beats Scissors");
                playerScore++;
            } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "paper")) {
                console.log ("Computer WINS! Paper beats Rock");
                computerScore++;
            } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "rock")) {
                console.log ("Player WINS! Paper beats Rock");
                playerScore++;
            } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "scissors")) {
                console.log ("Computer WINS! Scissors beats Paper");
                computerScore++;
            } else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection.toLowerCase() === "rock")) {
                console.log ("Computer WINS! Rock Beats Scissors");
                computerScore++;
            } else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection.toLowerCase() === "paper")) {
                console.log ("Player WINS! Scissors Beats Paper")
                playerScore++;
            }
        }


        //Write a function that will play the game once, then we add a loop to play a 5 rounds game
        function fGame() {

            let playerSelection = prompt("What is your pick?");
            const computerSelection = getComputerChoice();
            
            singleRound(playerSelection.toLowerCase(), computerSelection)
            console.log(`Score  player: ${playerScore} computer: ${computerScore} `)

            }

        function game() {
            for (let i = 0; i < 5; i++) {
                fGame();
            }

            if (playerScore > computerScore) {
                console.log("Gz, you won the game");
            } else if (playerScore < computerScore) {
                console.log("Computer won the game, you lost!");
            } else {
                console.log("It's a draw");
            }

        }
        game();
