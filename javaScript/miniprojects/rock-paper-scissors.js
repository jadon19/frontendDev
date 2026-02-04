let score= 
JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    loss:0,
    tie:0
}

const scoreElement = document.querySelector('.js-score');
scoreElement.innerHTML = `Wins: ${score.wins}. Loss: ${score.loss}. Ties: ${score.tie}`;
const choiceElement = document.querySelector('.js-choice');
const resultElement = document.querySelector('.js-result');

function calculateComputerMove(){
    let computerMove ='';
    let number = Math.random();
    if(number>=0 && number<1/3){
        computerMove = 'rock';
    }
    else if(number>=1/3 && number <2/3){
        computerMove = 'paper';
    }          
    else{
        computerMove = 'scissors';
    }
    return computerMove;
}
function calculateResult(userMove){
    let computerMove = calculateComputerMove();
    let result='';
    if(userMove==='rock'){
        if(computerMove==='rock'){
        result='Tie';
        }
        else if(computerMove==='paper'){
            result='You lose';
        }
        else{
            result='You win';
        }
    }
    else if(userMove==='paper'){
        if(computerMove==='rock'){
            result='You win';
        }
        else if(computerMove==='paper'){
            result='Tie';
        }
        else{
            result='You lose';
        }
    }
    else{
        if(computerMove==='rock'){
            result='You lose';
        }
        else if(computerMove==='paper'){
            result='You win';
        }
        else{
            result='Tie';
        }
    }
    if(result === 'You win'){
        score.wins+=1;
    }
    else if(result === 'You lose'){
        score.loss+=1;
    }
    else{
        score.tie+=1;
    }
    //in case page refresh
    //local storage takes on string values
    localStorage.setItem('score',JSON.stringify(score));
    choiceElement.innerHTML = 
    `<div class="user-move">
            <img src="RPS/${userMove}-emoji.png" alt="" class="move-icon-choice">
            <span class="player-name">You</span>
        </div>
        <div class="computer-move">
            <img src="RPS/${computerMove}-emoji.png" alt="" class="move-icon-choice">
            <span class="player-name">Computer</span>
    </div> `;
    resultElement.innerHTML = `Result: ${result}\n`;
    scoreElement.innerHTML = `Wins: ${score.wins}. Loss: ${score.loss}. Ties: ${score.tie}`;
    return result;
}
function resetScore(){
    score.wins = 0;
    score.loss = 0;
    score.tie = 0;
    localStorage.removeItem('score');
    scoreElement.innerHTML = `Wins: ${score.wins}. Loss: ${score.loss}. Ties: ${score.tie}`;
    choiceElement.innerHTML = "";
    resultElement.innerHTML = "";
}
