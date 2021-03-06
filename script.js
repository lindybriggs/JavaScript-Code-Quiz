// GIVEN I am taking a code quiz...

// Define variables based on html elements, id's, classes, etc.
// Set display to none for components to be hidden at certain stages of quiz
let timerEl = document.querySelector("#timer");
let welcomeMessage = document.querySelector(".welcome");
let quizText = document.querySelector(".quiz");
let scoreboard = document.querySelector(".scoreboard");
let answerStatus = document.querySelector(".correctWrong");
let quizOverInfo = document.querySelector(".saveInfo");
let initialsInput = document.querySelector("#initials");
let enteredInitials = initialsInput.value;
quizText.style.display = "none";
quizOverInfo.style.display = "none";
scoreboard.style.display = "none";

// Declare function to subtract 1 from timer every second to update timerEL to display timer's current value. Clears at 0.

let timer = 75;

function timerId() {
    setInterval(function () {
        timer--;
        timerEl.textContent = timer;

        if (timer === 0) {
            clearInterval(timerId);
            quizDone();
        }

    }, 1000)
}

// STEP 1:
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// //////////////////////////////////////////////////////
// Clicking button calls newAttempt function --> timer function called --> displays updated --> startQuiz function called.
// Additional button variable defined.
let startButton = document.querySelector(".beginButton");

function newAttempt() {
    timerId();
    console.log("hello");
    welcomeMessage.style.display = "none";
    quizOverInfo.style.display = "none";
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

// Additional variables defined for html elements, id's, classes (which are buttons).

let question = document.querySelector("#question");
let choiceA = document.querySelector(".a");
let choiceB = document.querySelector(".b");
let choiceC = document.querySelector(".c");
let choiceD = document.querySelector(".d");
let currentQuestion = 0
let questionsRight = 0

// Array of questions, each containing it's own set of variables.
let questions = [
    {
        question: "Which HTML tag do we use to link Javascript files?",
        choices: ["a. <h1>", "b. <link>", "c. <script>", "d. <meta>"],
        answer: "c. <script>",
    }, {
        question: "Which of the following is a primitive data type?",
        choices: ["a. Number", "b. String", "c. Boolean", "d. All of the above"],
        answer: "d. All of the above",
    }, {
        question: "What is camelCase?",
        choices: ["a. How we organize functions", "b. Another term for 'if statements'", "c. Writing phrases with lowercase letters first followed immediately by capital letters", "d. A nick name for Javascript"],
        answer: "c. Writing phrases with lowercase letters first followed immediately by capital letters",
    }, {
        question: "Which is true regarding primitives?",
        choices: ["a. Primitives are data", "b. Primitives are not objects", "c. Primitives have no methods", "d. All of the above"],
        answer: "d. All of the above",
    }, {
        question: "Which of the following conditions is true?",
        choices: ["a. 10 === 10", "b. 10 === ten", "c. 10 == ten", "d. 10 !=== 10"],
        answer: "a. 10 === 10",
    }, {
        question: "Which of the following is not an aritmetic operator?",
        choices: ["a. +", "b. ~", "c. -", "d. *"],
        answer: "b. ~",
    }, {
        question: "What is the Array() constructor used for?",
        choices: ["a. To build tables", "b. To store a collection of items under a single variable", "c. To combine lists", "d. To call functions"],
        answer: "b. To store a collection of items under a single variable",
    }, {
        question: "Which would generate a random number?",
        choices: ["a. Math.random", "b. Math.pick", "c. Math.floor", "d. Math.number"],
        answer: "a. Math.random",
    }, {
        question: "Which is the correct syntax for referring to an external script called '123.js'?",
        choices: ["a. <script name='123.js'>", "b. <script href='123.js>", "c. <script '123.js'>", "d. <script src='123.js'"],
        answer: "d. <script src='123.js'",
    }, {
        question: "Who invented Javascript?",
        choices: ["a. Hakon Wium Lie", "b. Tim Berners-Lee", "c. Brendan Eich", "d. Bill Gates"],
        answer: "c. Brendan Eich",
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
        questionsRight++;
    } else {
        answerStatus.textContent = "Wrong. 5 seconds cut from timer."
        timer-=5;
        timerEl.textContent = timer;
    }

    currentQuestion++;
    if (currentQuestion < questions.length){
        askQuestions();
    } else {
        quizDone();
    }

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

let finalScore = document.querySelector(".finalScore");

function quizDone(){
    welcomeMessage.style.display = "none";
    quizText.style.display = "none";
    timerEl.style.display = "none";
    answerStatus.style.display = "none";
    quizOverInfo.style.display = "block";

    finalScore.textContent = "Your final score is: " + questionsRight + "/10";
}

// STEP 5:
    // WHEN the game is over
    // THEN I can save my initials and my score~

let submitButton = document.querySelector(".submit");
let clearScoresButton = document.querySelector(".clearScores");
let scoresList = document.querySelector(".scores-list");
let scores = [];

// Using for loop based on finalScores. Creating list items.
function showScores(){
    console.log(scores)
    console.log(scores.length)

    let finalScores = JSON.parse(localStorage.getItem("scores"))
    console.log(finalScores)

    welcomeMessage.style.display = "none";
    quizText.style.display = "none";
    timerEl.style.display = "none";
    answerStatus.style.display = "none";
    quizOverInfo.style.display = "none";
    scoreboard.style.display = "block";

    scoresList.innerHTML = "";

    for (let i = 0; i < finalScores.length; i++){
        let score = finalScores[i];
        console.log(score)

        let li = document.createElement("li");
        li.textContent = score.initials +-+ score.score;

        scoresList.appendChild(li);
    }

};

// Saving information to local storage.
function storeScores(){
// Need to start with nothing in local storage.
    if (localStorage.length === 0){
        localStorage.setItem("scores", "[]")
    }

    let oldScores = localStorage.getItem("scores");
    oldScores = JSON.parse(oldScores);
    oldScores.push(scores[0]);
    let newScores = oldScores

    localStorage.setItem("scores", JSON.stringify(newScores));
}

// Upon click of submit button, additional functions called and userScore begins building.
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    let initialsText = initialsInput.value;

    if (initialsText === ""){
        return;
    };
        let userScore = {
        initials: initialsText,
        score: questionsRight
    }

    scores.push(userScore);
    initialsInput.value = "";

    storeScores();
    showScores();
});
