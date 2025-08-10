const rockButton = document.querySelector('.rock-btn');
const paperButton = document.querySelector('.paper-btn');
const scissorButton = document.querySelector('.scissors-btn');
const result = document.querySelector('.result');
const userHandIcon = document.querySelector('.user.hand-icon');
const computerHandIcon = document.querySelector('.computer.hand-icon');
const userScore = document.querySelector('.user-score');
const computerScore = document.querySelector('.computer-score');

const rockIcon = '✊';
const paperIcon = '🤚';
const scissorIcon = '✌️';

const iconList = [rockIcon, paperIcon, scissorIcon];

rockButton.addEventListener('click', () => {
  calculateResult(rockIcon, scissorIcon);
});

paperButton.addEventListener('click', () => {
  calculateResult(paperIcon, rockIcon);
});

scissorButton.addEventListener('click', () => {
  calculateResult(scissorIcon, paperIcon);
});

function calculateResult(selectedIcon, winningIcon) {
  result.innerText = '';
  userHandIcon.innerText = '🤜';
  computerHandIcon.innerText = '🤛';

  userHandIcon.classList.add('shakeUserHands');
  computerHandIcon.classList.add('shakeComputerHands');
  setTimeout(() => {
    userHandIcon.classList.remove('shakeUserHands');
    computerHandIcon.classList.remove('shakeComputerHands');
    userHandIcon.innerText = selectedIcon;
    const computerChoice = Math.floor(Math.random() * 3);
    computerHandIcon.innerText = iconList[computerChoice];
    if (userHandIcon.innerText === computerHandIcon.innerText) {
      result.innerText = 'Draw';
    } else if (computerHandIcon.innerText === winningIcon) {
      result.innerText = 'You Won!!';
      userScore.innerText = +userScore.innerText + 1;
    } else {
      result.innerText = 'Computer Won!!';
      computerScore.innerText = +computerScore.innerText + 1;
    }
  }, 1000);
}
