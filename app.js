const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

const playGame = () => {
    const rockBtn = document.querySelector('.button-53');
    const paperBtn = document.querySelector('.button-54');
    const scissorBtn = document.querySelector('.button-55');
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ['rock', 'paper', 'scissors'];

    playerOptions.forEach(option => {
        option.addEventListener('click', function(){
            const movesLeft = document.querySelector('.movesleft');
            moves++;
            movesLeft.innerText = `You have ${10-moves} left`;

            const choiceNumber = Math.floor(Math.random()*3);
            const computerChoice = computerOptions[choiceNumber];

            winner(this.innerText,computerChoice)

            if(moves == 10){
                gameOver(playerOptions,movesLeft);
            }
        })
    })
}

const winner = (player,computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer){
        result.textContent = 'Tie'
    } else if(player =='rock'){
        if(computer == 'paper'){
            result.textContent = "I Won";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'You won'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            result.textContent = 'I won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'You won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            result.textContent = 'I won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'You won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
} 

const gameOver = (playerOptions,movesLeft) => {

    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');

    playerOptions.forEach(option => {
        option.style.display = 'none';
    })

    chooseMove.innerText = 'Game Over'
    movesLeft.style.display = 'none';

    if(playerscore  > computerScore){
        result.innerText = 'You Won the game'
    }
    else if(playerScore < computerScore){
        result.innerText = 'You lost the game'
    }
    else{
        result.innerText = "It's a tie"
    }
    /*
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'flex';
    reloadBtn.addEventListener('click',() => {
        window.location.reload();
    }) */
}

    playGame();
}
game();