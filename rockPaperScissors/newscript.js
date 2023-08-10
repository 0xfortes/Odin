// First we "cache" the DOM - Means that we are storing these variables, so we can use them later
let playerScore = 0;
let computerScore = 0;
//This are html variables that store DOM elements. I used _dom to know that those are DOM variables
const userScore_dom = document.querySelector('#user-score');
const pcScore_dom = document.querySelector('#pc-score');
const scoreMsg_dom = document.querySelector('.scoremsg');
const message_dom = document.querySelector('.message > p'); // Why > p? Because the message is stored in a p tag, not in the result class
const result_dom = document.querySelector('.resultmsg > p'); 

const rock_dom = document.querySelector('#r');
const paper_dom = document.querySelector('#p');
const scissors_dom = document.querySelector('#s');

function getComputerChoice() {  
    const arr = ["Rock", "Paper", "Scissors"];
    const choices = arr[Math.floor(Math.random() * arr.length)];
    return choices;  
}

function win(playerChoice, computerChoice) {
    playerScore++;
    // Now we wanna show it on the counter on the page
    userScore_dom.innerHTML = playerScore;
    pcScore_dom.innerHTML = computerScore;
    // we wanna display the message on the page
    message_dom.innerHTML = `${playerChoice} beats ${computerChoice}. Player wins!`;

}
function lose(playerChoice, computerChoice) {
    computerScore++;
    userScore_dom.innerHTML = playerScore;
    pcScore_dom.innerHTML = computerScore;
    message_dom.innerHTML = `${playerChoice} loses to ${computerChoice}. Computer wins!`;

}
function draw(playerChoice, computerChoice) {
    message_dom.innerHTML = `${playerChoice} equals ${computerChoice}. It's a draw!`;
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    switch(playerChoice + computerChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(playerChoice, computerChoice);
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(playerChoice, computerChoice);
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            draw(playerChoice, computerChoice);
            break;
    }
}

function main() {
    rock_dom.addEventListener('click', function() {
        playRound('Rock');
        checkWinner(playerScore, computerScore);
       
    })

    paper_dom.addEventListener('click', function() {
        playRound('Paper');
        checkWinner(playerScore, computerScore);
       
    })

    scissors_dom.addEventListener('click', function() {
        playRound('Scissors');
        checkWinner(playerScore, computerScore);
       
    })
}

main();

const checkWinner = (playerScore, computerScore) => {
    const h2 = document.createElement('h2')
    if (playerScore === 5) {
        
        h2.innerText = `You won ${playerScore} to ${computerScore}! Congratz `
        h2.classList.add('green');
        result_dom.append(h2)
    } else if  (computerScore === 5) {
        h2.innerText = `You lost ${playerScore} to ${computerScore}! Better luck next time `
        h2.classList.add('red');
        result_dom.append(h2)
    } 
} 