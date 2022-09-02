const opponentDisplay = document.getElementById('opponent-display');
const playerDisplay = document.getElementById('player-display');
const resultDisplay = document.getElementById('result-display');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let choice


function rng() {
    choice = Math.floor(Math.random() * 3);
    switch (choice){
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
    }
    return choice;
}



rock.addEventListener('click', () => {
    rng();
    playerDisplay.innerText = "Rock";
    opponentDisplay.innerText = choice;

    if (choice === 'Rock'){
        resultDisplay.innerText = 'It Is A Draw'
    } else if (choice === 'Paper') {
        resultDisplay.innerText = 'You Lose!'
    } else {
        resultDisplay.innerText = 'You Win!'
    }
})

paper.addEventListener('click', () => {
    rng();
    playerDisplay.innerText = "Paper";
    opponentDisplay.innerText = choice;

    if (choice === 'Paper'){
        resultDisplay.innerText = 'It Is A Draw'
    } else if (choice === 'Scissors') {
        resultDisplay.innerText = 'You Lose!'
    } else {
        resultDisplay.innerText = 'You Win!'
    }
})

scissors.addEventListener('click', () => {
    rng();
    playerDisplay.innerText = "Scissors";
    opponentDisplay.innerText = choice;

    if (choice === 'Scissors'){
        resultDisplay.innerText = 'It Is A Draw'
    } else if (choice === 'Rock') {
        resultDisplay.innerText = 'You Lose!'
    } else {
        resultDisplay.innerText = 'You Win!'
    }
})
