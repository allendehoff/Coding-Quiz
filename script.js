var startButton = document.getElementById("start")
var introEl = document.getElementById("intro")
var questionEl = document.getElementById("questionBlock")
var answerTracker = document.getElementById("answer-tracker")
var timerEl = document.getElementById("timer")
var timerDiv = document.getElementById("timerDiv")

var jumbo = document.getElementById("scoreboard")
var jumbotronBtn = document.getElementById("jumbotron-btn")
var clearBtn = document.getElementById("clear")
var newTryBtn = document.getElementById("try-again")

var secondsLeft
var score = 0
var timerInterval;
var questionIndex = 0;

var question = document.getElementById("question")
var answer = document.getElementsByClassName("answer")
var tracker = document.getElementsByClassName("tracker")

var leaderBoard = document.getElementById("leaders")

var modal = document.getElementById("score-modal")
var playerName = document.getElementById("player-name")
var submitBtn = document.getElementById("submit-score")

//creates a blank array and runs a function to fill it with scores stored in local storage if page is refreshed after an attempt has been made
var scores = []
initScores()

//array holding objects containing question, answers, and index of correct answer
var questions = [
    {
        question: "What color is the sky?",
        answers: ["purple", "yellow", "blue", "red"],
        checks: 2
    },
    {
        question: "Which of these swims?",
        answers: ["fish", "zebra", "elephant", "turkey"],
        checks: 0
    },
    {
        question: "What does the dog say?",
        answers: ["moo", "woof", "meow", "cockadoodledoo"],
        checks: 1
    },
    {
        question: "Who makes the MacBook?",
        answers: ["Acer", "Samsung", "Intel", "Apple"],
        checks: 3
    },
    {
        question: "Which of these is a programming language?",
        answers: ["Spanish", "JavaScript", "Klingon", "Gibberish"],
        checks: 1
    }
]

//function that will start and increment the timer and run the endQuiz function defined below if time runs out
function runTimer() {
    secondsLeft = 30
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            endQuiz();
        }

    }, 1000);
}

//listener to show and hide elements necessary for the quiz to function, initiate timer function defined above, and render first question
startButton.addEventListener("click", function () {
    timerEl.classList.remove("hide");
    timerDiv.classList.remove("hide")
    timerEl.textContent = "Time Remaining: 30";
    introEl.classList.add("hide");
    questionEl.classList.remove("hide");
    answerTracker.classList.remove("hide");
    runTimer()
    renderQuestion(questionIndex)
})


//function that clears and hides the timer at the end of the quiz (used for time = 0 and after last question)
function endQuiz() {
    clearInterval(timerInterval);
    timerDiv.classList.add("hide");
}

//function to load current question and answers and assign the handleClick function to each answer
function renderQuestion(x) {
    question.textContent = questions[x].question;
    for (var i = 0; i < answer.length; i++) {
        answer[i].textContent = questions[x].answers[i]
        answer[i].addEventListener('click', handleClick)
    }
}

//function to compare user selection to correct answer and adjust answer tracker to green if right and red if wrong | increments or decrements score based on correct or incorrect answer
function handleClick() {
    var guessed = questions[questionIndex].answers.indexOf(this.textContent)
    var correct = questions[questionIndex].checks
    if (guessed === correct){
        tracker[questionIndex].classList.add("right")
        score ++
    } else {
        tracker[questionIndex].classList.add("wrong")
        score--
        if (secondsLeft >= 5){
        secondsLeft -= 5} else{ secondsLeft -= secondsLeft}
    }
    //increases questionIndex by 1 so that next question will load after and answer is selected, unless it is the last question in which case it runs endQuiz defined above and newScore defined below to enter the user's score
    questionIndex++;
    if (questionIndex < questions.length) {
        renderQuestion(questionIndex)
    } else {
        endQuiz()
        newScore()
    }
}

//functino to display scoreboard and hide everything else and plug in user's initials and score to scoreboard
function showScoreboard() {
    endQuiz()
    jumbo.classList.remove("hide")
    introEl.classList.add("hide")
    questionEl.classList.add("hide")
    answerTracker.classList.add("hide")
    jumbotronBtn.classList.add("hide")
    renderScores()
}

//listener for button in top left of screen so the user can view high scores at any time (ends current try if user in the middle of quiz)
jumbotronBtn.addEventListener("click", showScoreboard)

//resets everything to initial loading state so that user can try to beat the score they just put on the scoreboard
newTryBtn.addEventListener("click", function(){
    jumbo.classList.toggle("hide")
    introEl.classList.remove("hide")
    jumbotronBtn.classList.remove("hide")
    questionIndex = 0
    score = 0
    for (var i = 0; i <= answer.length; i++){
        tracker[i].classList.remove("right")
        tracker[i].classList.remove("wrong")
    }
})

//loads scores from local storage to preserve them if page is refreshed before user clears the scoreboard
function initScores(){
    var storedScores = JSON.parse(localStorage.getItem("scorelist"));

    if (storedScores !== null){
        scores = storedScores
    }
}

//adds scores to local storage to be retrieved later
function storeScore(){
    localStorage.setItem("scorelist", JSON.stringify(scores));
}

//pulls up modal for user to enter their initials to put their score on the scoreboard
function newScore() {
    playerName.value = ""
    modal.classList.add("show")
    modal.style.display = "block"
    }

//listener for user to use submit button to add their score
submitBtn.addEventListener("click", function () {
    event.preventDefault()
    submit()
})

//function that adds user initials and score to scores list, hides modal and shows scoreboard
function submit(){
    if (playerName.value === ""){
        return
    }
    var currentUser = playerName.value.trim();

    var playerEntry = currentUser + ": " + score

    scores.push(playerEntry)
    playerName.innerHTML = ""
    modal.classList.remove("show")
    modal.style.display = "none"
    storeScore()
    showScoreboard()
}

//listener to make sure enter key works the same as submit button
playerName.addEventListener("keyup", function(event) {
    event.preventDefault()
    if (event.keyCode === 13) {
        event.preventDefault();
        submit()
    }
});

//publishes scores in scoreboard from scores list
function renderScores(){
    leaderBoard.innerHTML = "";

    for (var i = 0; i < scores.length; i++){
        var player = scores[i]

        var newPlayer = document.createElement("p")
        newPlayer.textContent = player

        var newBreak = document.createElement("hr")
        newBreak.classList.add("my-4")

        leaderBoard.appendChild(newPlayer)
        leaderBoard.appendChild(newBreak)
    }
}


//listener to make clear button erase all scores from local storage, scores list, and from display
clearBtn.addEventListener("click", function () {
    event.preventDefault()
    while (leaders.firstChild) leaders.removeChild(leaders.firstChild)
    localStorage.clear()
    scores = []
})