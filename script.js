var startButton = document.getElementById("start")
var introEl = document.getElementById("intro")
var questionEl = document.getElementById("question")

startButton.addEventListener("click", function(){
    introEl.setAttribute("class", "invisible");
    questionEl.classList.remove("invisible");
})