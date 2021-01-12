function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            display = document.getElementById('timeRemaining').textContent = "Expired";
            document.getElementById('code').disabled = true;
            document.getElementById('submitBtn').disabled = true;
        }
    }, 1000);
}

window.onload = function () {
    var twoMinutes = 2 * 60,
        display = document.getElementById('timeRemaining');
    startTimer(twoMinutes, display);
};