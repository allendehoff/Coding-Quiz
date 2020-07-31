var startButton = document.getElementById("start")
var introEl = document.getElementById("intro")
var questionEl = document.getElementById("question")
var answerTracker = document.getElementById("answer-tracker")
var timerEl = document.getElementById("timer")
var secondsLeft = 30

function runTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Time Remaining: " + secondsLeft;

        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
        }
        
    }, 1000);
}

function endQuiz(){
    timerEl.setAttribute("class", "hide")
}

//question object
var questionOne = {
    question: "Question one",
    answerA: "Wrong A",
    answerB: "Wrong B",
    answerC: "Right C",
    answerD: "Wrong D"
}

var questionTwo = {
    question: "Question two",
    answerA: "Right A",
    answerB: "Wrong B",
    answerC: "Wrong C",
    answerD: "Wrong D"
}

var questionThree = {
    question: "Question three",
    answerA: "Wrong A",
    answerB: "Wrong B",
    answerC: "Wrong C",
    answerD: "Right D"
}

var questionFour = {
    question: "Question four",
    answerA: "Wrong A",
    answerB: "Right B",
    answerC: "Wrong C",
    answerD: "Wrong D"
}

var questionFive = {
    question: "Question five",
    answerA: "Right A",
    answerB: "Wrong B",
    answerC: "Wrong C",
    answerD: "Wrong D"
}

startButton.addEventListener("click", function(){
    timerEl.textContent = "Time Remaining: 30";
    introEl.setAttribute("class", "hide");
    questionEl.classList.remove("hide");
    answerTracker.classList.remove("hide");
    runTimer()
})

