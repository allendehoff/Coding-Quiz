var startButton = document.getElementById("start")
var introEl = document.getElementById("intro")
var questionEl = document.getElementById("questionBlock")
var answerTracker = document.getElementById("answer-tracker")
var timerEl = document.getElementById("timer")
var secondsLeft = 30
var score = 0
var timerInterval;
var questionIndex = 0;

var question = document.getElementById("question")
// var answerEls = [
//     document.getElementById("answer-one"),
//     document.getElementById("answer-two"),
//     document.getElementById("answer-three"),
//     document.getElementById("answer-four")
// ]

var answer = document.getElementsByClassName("answer")

var tracker = [
    document.getElementById("ans1"),
    document.getElementById("ans2"),
    document.getElementById("ans3"),
    document.getElementById("ans4"),
    document.getElementById("ans5")
]

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




startButton.addEventListener("click", function () {
    timerEl.textContent = "Time Remaining: 30";
    introEl.classList.add("hide");
    questionEl.classList.remove("hide");
    answerTracker.classList.remove("hide");
    runTimer()
    renderQuestion(questionIndex)
})

function runTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            endQuiz();
        }

    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    timerEl.classList.add("hide")
    storeScore()
}

function renderQuestion(x) {
    question.textContent = questions[x].question;

    for (var i = 0; i < answer.length; i++) {
        answer[i].textContent = questions[x].answers[i]
        answer[i].addEventListener('click', handleClick)
    }
    // answerEls[0].textContent = questions[x].answers[0];
    // // answerEls[0].setAttribute("data-check", questions[x].checks[0]);
    // answerEls[1].textContent = questions[x].answers[1];
    // // answerEls[1].setAttribute("data-check", questions[x].checks[1]);
    // answerEls[2].textContent = questions[x].answers[2];
    // // answerEls[2].setAttribute("data-check", questions[x].checks[2]);
    // answerEls[3].textContent = questions[x].answers[3];
    // // answerEls[3].setAttribute("data-check", questions[x].checks[3]);

    // for (const ans of answer) {
    //     ans.addEventListener("click", function () {
    //         if (ans.getAttribute("data-check") === "right") {
    //             tracker[x].classList.add("right")
    //             score++
    //         }
    //         else if (ans.getAttribute("data-check") === "wrong") {
    //             tracker[x].classList.add("wrong")
    //             score--
    //         }
    //     })
    // }
}

function handleClick() {
    var guessed = questions[questionIndex].answers.indexOf(this.textContent)
    var correct = questions[questionIndex].checks
    console.log(guessed === correct)


    questionIndex++;
    if (questionIndex < questions.length) {
        renderQuestion(questionIndex)
    }
}


var highScores = []
var jumbo = document.getElementById("scoreboard")
var leaderBoard = document.getElementById("leaders")
var clearBtn = document.getElementById("clear")
var modal = document.getElementById("score-modal")
var playerName = document.getElementById("player-name")
var submitBtn = document.getElementById("submit-score")

function storeScore() {
    modal.classList.add("show")
    submitBtn.addEventListener("click", function () {
        event.preventDefault()
        var newBreak = document.creatElement("hr")
        var newPlayer = jumbo.creatElement("p")
        newBreak.classList.add("my-4")
        newPlayer.textContent = playerName.value + score
        leaderBoard.appendChild(newBreak)
        leaderBoard.appendChild(newPlayer)
        toggleScoreboard()
    })
}

function toggleScoreboard() {
    if (jumbo.className === hide) {
        jumbo.classList.remove("hide")
    }
    else {
        jumbo.classList.add("hide")
    }
}

clearBtn.addEventListener("click", function () {
    while (leaders.firstChild) leaders.removeChild(leaders.firstChild)
})


// function selectAnswer(x){
//     for (const ans of answer){
//         ans.addEventListener("click", function(){
//             if (ans.getAttribute("data-check") === "right"){
//                 tracker[x].classList.add("right")
//                 score++
//             }
//             else if (ans.getAttribute("data-check") === "wrong"){
//                 tracker[x].classList.add("wrong")
//                 score --
//             }
//         })
//         }
// }


// function selectAnswer(){

    // for (const ans of answer){
    // ans.addEventListener("click", function(){
    //     if (ans.getAttribute("data-check") === "right"){
    //         tracker[x].classList.add("right")
    //         score++
    //     }
    //     else if (ans.getAttribute("data-check") === "wrong"){
    //         tracker[x].classList.add("wrong")
    //         score --
    //     }

    //     console.log(score)
    // })
    // }
// }

// for (var i = 0; i < questions.length; i++){
//     renderQuestion()
//     for (const ans of answer){
//         ans.addEventListener("click", function(){
//             if (ans.getAttribute("data-check") === "right"){
//                 tracker[i].classList.add("right")
//                 score++
//             }
//             else if (ans.getAttribute("data-check") === "wrong"){
//                 tracker[i].classList.add("wrong")
//                 score --
//             }

//             console.log(score)
//         })
//         }
// }










