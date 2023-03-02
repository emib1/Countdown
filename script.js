const countdownArea = document.querySelector('.countdown');
const numbersArea = document.querySelector('.numbers');
const resetBtn = document.querySelector('.reset');
let interval;
let count = 0;

// start the timer when page loads
createTimer();

// recreate the timer when reset is clicked
resetBtn.addEventListener('click', createTimer);

// create the interval that creates the timer
function createTimer() {
  clearInterval(interval);
  count = 11;

  interval = setInterval(() => {
    count--;
    countdownArea.innerHTML = `${count}`;

    if (count <= 0) {
      // go to the next episode
      clearInterval(interval);
    }
  }, 1000);
}