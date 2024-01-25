var lower = Number(JSON.parse(localStorage.getItem('lowerRange')));
var higher = Number(JSON.parse(localStorage.getItem('higherRange')));



// console.log(lower, higher);


document.getElementById('start').innerHTML = lower;
document.getElementById('end').innerHTML = higher;


document.getElementById('score').textContent = lower;
let secretNumber = Math.trunc(Math.random() * (higher-lower)) + lower;
let score = lower;
let highscore = 0;

// percentage of guess's difference

console.log(secretNumber)

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  const guessPercent = Math.abs(100 - (guess/secretNumber)*100);
  console.log(guessPercent);


  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {

    document.querySelector('.guess').textContent = '';

    if (score > 1) {
    //   displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

        if(guess > secretNumber){

            displayMessage(guessPercent > 20 ? "Too high" : "high")
        }
        else{
            displayMessage(guessPercent > 20 ? "Too low" : "low")
        }


    //   displayMessage(guess > secretNumber ? (guessPercent > 50 ? "Too high" : "high") : (guessPercent > 50 ? "Too low" : "low"));

      score--;
      document.querySelector('.score').textContent = score;


      //! solve the retype problem
      document.querySelector('.guess').value = '';
      
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }


});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});