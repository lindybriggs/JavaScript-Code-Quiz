// STEP 5:
    // WHEN the game is over
    // THEN I can save my initials and my score~

    let submitButton = document.querySelector(".submit");
    let clearScoresButton = document.querySelector(".clearScores");
    let scoresList = document.querySelector(".scores-list");
    let scores = [];
    
    function showScores(){
        console.log(scores)
        console.log(scores.length)
    
        let finalScores = JSON.parse(localStorage.getItem("scores"))
        console.log(finalScores)
    
        // welcomeMessage.style.display = "none";
        // quizText.style.display = "none";
        // timerEl.style.display = "none";
        // answerStatus.style.display = "none";
        // quizOverInfo.style.display = "none";
        // scoreboard.style.display = "block";
    
        scoresList.innerHTML = "";
    
        for (let i = 0; i < finalScores.length; i++){
            let score = finalScores[i];
            console.log(score)
    
            let li = document.createElement("li");
            li.textContent = score.initials +-+score.score;
    
            scoresList.appendChild(li);
        }
    
    };
    
    function init(){
        // scoreboard.style.display = "block";
        let storedScores = JSON.parse(localStorage.getItem("scores"));
        console.log(storedScores);
    
        if (storedScores !== null){
            scores = storedScores;
        }
        showScores();
    }
    
    function storeScores(){
    // need to start with nothing in local storage
        if (localStorage.length === 0){
            localStorage.setItem("scores", "[]")
        }
    
        let oldScores = localStorage.getItem("scores");
        oldScores = JSON.parse(oldScores);
        oldScores.push(scores[0]);
        let newScores = oldScores
    
        localStorage.setItem("scores", JSON.stringify(newScores));
    }
    
    // submitButton.addEventListener("click", function(event){
    //     event.preventDefault();
    //     let initialsText = initialsInput.value;
    
    //     if (initialsText === ""){
    //         return;
    //     };
    //         let userScore = {
    //         initials: initialsText,
    //         score: questionsRight
    //     }
    
    //     scores.push(userScore);
    //     initialsInput.value = "";
    
        storeScores();
        showScores();
    // });
    
    // init();
    
    // submitButton.addEventListener("click", function () {
    //     location.href = "./scoreboard.html";
    // });