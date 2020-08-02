var startButton = $("#start")
var introEl = $("#intro")
var questionEl = $("#questionBlock")
var answerTracker = $("#answer-tracker")
var timerEl = $("#timer")
var secondsLeft = 30
var question = $("#question")
var firstAnswer = $("#answer-one")
var secondAnswer = $("#answer-two")
var thirdAnswer = $("#answer-three")
var fourthAnswer = $("#answer-four")


startButton.on("click", function(){
    timerEl.text("Time Remaining: 30");
    introEl.attr("class", "hide");
    questionEl.removeClass("hide");
    answerTracker.removeClass("hide");
    renderQuestion()
    runTimer()
})

function runTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.text = "Time Remaining: " + secondsLeft;

        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
        }
        
    }, 1000);
}

function endQuiz(){
    timerEl.attr("class", "hide")
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
    question.text(questions[0].question);
    firstAnswer.text(questions[0].answers[0]);
    firstAnswer.attr("data-check", questions[0].checks[0]);
    secondAnswer.text(questions[0].answers[1]);
    secondAnswer.attr("data-check", questions[0].checks[1]);
    thirdAnswer.text(questions[0].answers[2]);
    thirdAnswer.attr("data-check",questions[0].checks[2]);
    fourthAnswer.text(questions[0].answers[3]);
    fourthAnswer.attr("data-check", questions[0].checks[3]);


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




