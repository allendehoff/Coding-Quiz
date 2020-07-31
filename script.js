var startButton = document.getElementById("start")
var introEl = document.getElementById("intro")
var questionEl = document.getElementById("question")
var answerTracker = document.getElementById("answer-tracker")

//question object
var questionOne = {
    question: "Question one",
    answerA: "Wrong A",
    answerB: "Wrong B",
    answerC: "Right C",
    answerD: "Wrong D"
}

startButton.addEventListener("click", function(){
    introEl.setAttribute("class", "hide");
    questionEl.classList.remove("hide");
    answerTracker.classList.remove("hide");
})

