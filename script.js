// defining variable with value of timer id in html
let timerEl = document.querySelector("#timer");
// starting timer with 75 seconds
let timer = 75;
// defining an interval/countdown function to subtract 1 from timer every 1000 milliseconds and updating the timeEL (timer id is an h1 tag on page) to display timer's current value. will clear the interval once 0 is reached
function timerId() {
    setInterval(function(){
    timer--;
    timerEl.textContent = timer;

    if (timer === 0) {
        clearInterval(timerId);
    }
}, 1000)
}

// GIVEN I am taking a code quiz...

// STEP 1:
    // WHEN I click the start button
    // THEN a timer starts and I am presented with a question
let startButton = document.querySelector(".beginButton");

let startQuestions = function(){
    timerId();
    console.log("hello");
}
startButton.addEventListener("click", startQuestions);



// STEP 2:
    // WHEN I answer a question
    // THEN I am presented with another question

// STEP 3:
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock

// STEP 4:
    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over

// STEP 5:
    // WHEN the game is over
    // THEN I can save my initials and my score