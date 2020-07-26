var startButton = document.getElementById("start")
var introEl = document.getElementById("intro")
var questionEl = document.getElementById("question")
var answerTracker = document.getElementById("answer-tracker")

startButton.addEventListener("click", function(){
    introEl.setAttribute("class", "invisible");
    questionEl.classList.remove("invisible");
    answerTracker.classList.remove("invisible");
})