var startButton = document.getElementById("start")
var introEl = document.getElementById("intro")
var questionEl = document.getElementById("questionBlock")
var answerTracker = document.getElementById("answer-tracker")
var timerEl = document.getElementById("timer")
var secondsLeft = 30
var question = document.getElementById("question")
var firstAnswer = document.getElementById("answer-one")
var secondAnswer = document.getElementById("answer-two")
var thirdAnswer = document.getElementById("answer-three")
var fourthAnswer = document.getElementById("answer-four")


startButton.addEventListener("click", function(){
    timerEl.textContent = "Time Remaining: 30";
    introEl.classList.add("hide");
    questionEl.classList.remove("hide");
    answerTracker.classList.remove("hide");
    renderQuestion()
    runTimer()
})

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
    timerEl.classList.add("hide")
}

var questions = [
    {
        question: "What color is the sky?",
        answers: ["purple", "yellow", "blue", "red"],
        checks: ["wrong", "wrong", "right", "wrong"]
    },
    {
        question: "Which of these swims?",
        answers: ["fish", "zebra", "elephant", "turkey"],
        checks: ["right", "wrong", "wrong", "wrong"]
    }
]

function renderQuestion(){
    question.textContent = questions[0].question;
    firstAnswer.textContent = questions[0].answers[0];
    firstAnswer.setAttribute("data-check", questions[0].checks[0]);
    secondAnswer.textContent = questions[0].answers[1];
    secondAnswer.setAttribute("data-check", questions[0].checks[1]);
    thirdAnswer.textContent = questions[0].answers[2];
    thirdAnswer.setAttribute("data-check",questions[0].checks[2]);
    fourthAnswer.textContent = questions[0].answers[3];
    fourthAnswer.setAttribute("data-check", questions[0].checks[3]);


}


// answerClick()


//question object
// var questionOne = {
//     question: "Question one",
//     answerA: "Wrong A",
//     answerB: "Wrong B",
//     answerC: "Right C",
//     answerD: "Wrong D"
// }

// var questionTwo = {
//     question: "Question two",
//     answerA: "Right A",
//     answerB: "Wrong B",
//     answerC: "Wrong C",
//     answerD: "Wrong D"
// }

// var questionThree = {
//     question: "Question three",
//     answerA: "Wrong A",
//     answerB: "Wrong B",
//     answerC: "Wrong C",
//     answerD: "Right D"
// }

// var questionFour = {
//     question: "Question four",
//     answerA: "Wrong A",
//     answerB: "Right B",
//     answerC: "Wrong C",
//     answerD: "Wrong D"
// }

// var questionFive = {
//     question: "Question five",
//     answerA: "Right A",
//     answerB: "Wrong B",
//     answerC: "Wrong C",
//     answerD: "Wrong D"
// }




