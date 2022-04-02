// GIVEN I am taking a code quiz...

let timerEl = document.querySelector("#timer");
let welcomeMessage = document.querySelector(".welcome");
let quizText = document.querySelector(".quiz");
let answerStatus = document.querySelector(".correctWrong");
quizText.style.display = "none";

// Declare function to subtract 1 from timer every second to update timerEL to display timer's current value. Clears at 0.

let timer = 75;

function timerId() {
    setInterval(function () {
        timer--;
        timerEl.textContent = timer;

        if (timer === 0) {
            clearInterval(timerId);
        }

    }, 1000)
}

// STEP 1:
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
let startButton = document.querySelector(".beginButton");

let newAttempt = function () {
    timerId();
    console.log("hello");
    welcomeMessage.style.display = "none";
    quizText.style.display = "block";

    startQuiz();
}
startButton.addEventListener("click", newAttempt);

function startQuiz() {
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

// Array of questions, with each question containing it's own set of variables.
let questions = [
    {
        question: "Which HTML tag do we use to link Javascript files?",
        choices: ["a. <h1>", "b. <link>", "c. <script>", "d. <meta>"],
        answer: "c. <script>",
    }, {
        question: "Which of the following is a primitive data type?",
        choices: ["a. number", "b. string", "c. boolean", "d. all of the above"],
        answer: "d. all of the above",
    }
]

// Puts question text on screen, and question choices in buttons.
function askQuestions() {
    question.textContent = questions[currentQuestion].question;
    choiceA.textContent = questions[currentQuestion].choices[0];
    choiceB.textContent = questions[currentQuestion].choices[1];
    choiceC.textContent = questions[currentQuestion].choices[2];
    choiceD.textContent = questions[currentQuestion].choices[3];

}

// STEP 3:
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock

// Listens for which button is clicked, triggers function to see if value/string in that button's array spot matches answer string.
function checkAnswer(answer) {

    if (questions[currentQuestion].choices[answer] === questions[currentQuestion].answer){
        answerStatus.textContent = "Correct!"
    } else {
        answerStatus.textContent = "Wrong. 5 seconds cut from timer."
        timer-=5;
        timerEl.textContent = timer;
    }


    currentQuestion++;
    askQuestions();
}

choiceA.addEventListener("click", choseA);
choiceB.addEventListener("click", choseB);
choiceC.addEventListener("click", choseC);
choiceD.addEventListener("click", choseD);

function choseA (){
    checkAnswer(0)
};
function choseB (){
    checkAnswer(1)
};
function choseC (){
    checkAnswer(2)
};
function choseD (){
    checkAnswer(3)
};

// STEP 4:
    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over
    // (probably do an if statement, with timer equaling zero & questions being done-idk how yet-and statement brings to scoreboard.html)

// STEP 5:
    // WHEN the game is over
    // THEN I can save my initials and my score