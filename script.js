const choices = ['paper', 'scissors', 'rock'];
const buttons = document.querySelectorAll('.game-btn ');
const scoreCounter = document.getElementById('score-counter');
const game = document.getElementById('game');
const picked = document.getElementById('picked');
const again = document.getElementById('again');
const userSelect = document.getElementById('userSelect');
const pcSelect = document.getElementById('pcSelect');
const winnerIs = document.getElementById('winnerIs');
const style = document.querySelectorAll('span');

let score = 0;
let userChoice = undefined;


function randomChoice() {
  return choices[Math.floor(Math.random() * (3 - 0)) + 0];

}


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    userChoice = button.getAttribute('data-choice');

    winner();
  });
});


again.addEventListener('click',  () => {
  game.style.display = 'flex';
  picked.style.display = 'none';
  updateStyle(pcSelect);
  updateStyle(userSelect);
  removeWinnerStyle(pcSelect);
  removeWinnerStyle(userSelect);
})


function winner() {
  const pcChoice = randomChoice();

  updateSelection(pcSelect, pcChoice);
  updateSelection(userSelect, userChoice);

  if(userChoice === pcChoice) {
    winnerIs.innerText = 'draw';
  } else if (userChoice === 'paper' && pcChoice === 'rock' ||
      userChoice === 'rock' && pcChoice === 'scissors' ||
      userChoice === 'scissors' && pcChoice === 'paper') {
        updateScoreCounter(1);
        winnerIs.innerText = 'You Win';
        winnerStyle(userSelect);
    } else  {
        updateScoreCounter(-1);
        winnerIs.innerText = 'You Lose';
        winnerStyle(pcSelect);
      }
      game.style.display = 'none';
      picked.style.display = 'block';
}

function updateScoreCounter(value) {
  score += value;
  scoreCounter.innerText = score;
}

function updateSelection(pickedEl,choice) {
  pickedEl.classList.remove('paper-btn');
  pickedEl.classList.remove('rock-btn');
  pickedEl.classList.remove('scissors-btn');


  const img = pickedEl.querySelector('img');
  const span = pickedEl.querySelector('span');
  pickedEl.classList.add(`${choice}-btn`);
  img.src = `images/icon-${choice}.svg`;
  img.alt = choice;
  span.classList.add(`${choice}`);
}

function updateStyle(pickedEl) {
  const span = pickedEl.querySelector('span');
  span.classList.remove('paper');
  span.classList.remove('rock');
  span.classList.remove('scissors');
}


function winnerStyle(pickedEl) {
  const span = pickedEl.querySelector('span');
  span.classList.add(`winner-style`);
}

function removeWinnerStyle(pickedEl) {
  const span = pickedEl.querySelector('span');
  span.classList.remove('winner-style');
}
