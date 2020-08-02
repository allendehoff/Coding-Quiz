var startButton = document.getElementById("start")
var introEl = document.getElementById("intro")
var questionEl = document.getElementById("questionBlock")
var answerTracker = document.getElementById("answer-tracker")
var timerEl = document.getElementById("timer")
var secondsLeft = 30
var score = 0
var question = document.getElementById("question")
var answer = document.getElementsByClassName("answer")
var firstAnswer = document.getElementById("answer-one")
var secondAnswer = document.getElementById("answer-two")
var thirdAnswer = document.getElementById("answer-three")
var fourthAnswer = document.getElementById("answer-four")
var tracker = {
    ans1 : document.getElementById("ans1"),
    ans2 : document.getElementById("ans2"),
    ans3 : document.getElementById("ans3"),
    ans4 : document.getElementById("ans4"),
    ans5 : document.getElementById("ans5")
}


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

    for (const ans of answer){
    ans.addEventListener("click", function(){
        if (ans.getAttribute("data-check") === "right"){
            tracker.ans1.classList.add("right")
            score++
        }
        else if (ans.getAttribute("data-check") === "wrong"){
            tracker.ans1.classList.add("wrong")
            score --
        }
        console.log(score)
    })
    }
}






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



