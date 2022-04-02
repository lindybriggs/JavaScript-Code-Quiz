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

let welcomeMessage = document.querySelector(".welcome");

// STEP 1:
    // WHEN I click the start button
    // THEN a timer starts and I am presented with a question
let startButton = document.querySelector(".beginButton");

let newAttempt = function(){
    timerId();
    console.log("hello");
    welcomeMessage.style.display = "none";

    startQuiz();
}
startButton.addEventListener("click", newAttempt);

function startQuiz(){
    askQuestions();
}


// STEP 2:
    // WHEN I answer a question
    // THEN I am presented with another question

let question = document.querySelector("#question");
let choiceA = document.querySelector(".a");
let choiceB = document.querySelector(".b");
let choiceC = document.querySelector(".c");
let choiceD = document.querySelector(".d");
let currentQuestion = 0


let questions = [
    {
        question: "Which HTML tag do we use to link Javascript files?",
        choices: ["a. <h1>", "b. <link>", "c. <script>", "d. <meta>"],
        answer: "c. <script>",
    }
]

function askQuestions(){
    question.textContent = questions[currentQuestion].question;
    choiceA.textContent = questions[currentQuestion].choices[0];
    choiceB.textContent = questions[currentQuestion].choices[1];
    choiceC.textContent = questions[currentQuestion].choices[2];
    choiceD.textContent = questions[currentQuestion].choices[3];

}


// STEP 3:
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock

// STEP 4:
    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over
    // (probably do an if statement, with timer equaling zero & questions being done-idk how yet-and statement brings to scoreboard.html)

// STEP 5:
    // WHEN the game is over
    // THEN I can save my initials and my score