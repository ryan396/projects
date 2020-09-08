var seconds = 0;
var minutes = 0;
var myVar;
function startTimer() {
    document.getElementById("start").disabled = true;
    myVar = setInterval(myTimer, 1000);
    console.log(myVar);
}
function stopTimer() {
    clearInterval(myVar);
    document.getElementById("start").disabled = false;
}
function myTimer() {
    seconds++;
    if (seconds < 10) {
        document.getElementById("timer").innerHTML = minutes + ":0" + seconds;  
    } else if (seconds >= 10 && seconds <= 59) { 
        document.getElementById("timer").innerHTML = minutes + ":" + seconds; 
    } else if (seconds > 59) {
        minutes++;
        seconds = 0;
        document.getElementById("timer").innerHTML = minutes + ":" + seconds; 
    }
}
function resetTimer() {
    clearInterval(myVar);
    seconds = 0;
    minutes = 0;
    document.getElementById("timer").innerHTML = minutes + ":0" + seconds;
    document.getElementById("start").disabled = false;
}