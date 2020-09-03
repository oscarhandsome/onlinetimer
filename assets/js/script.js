// console.log('ready!');

setInterval(function () {
    var currentTime = new Date();
    $('#currentTime').text(currentTime.getHours() + ':' + currentTime.getUTCMinutes() + ':' + currentTime.getUTCSeconds());
}, 1000);

var hours = '00', minutes = '00', seconds = '00', milliseconds = 0, timer = 0;

function tick() {

    if (seconds >= 60) seconds = 0;
    seconds++;
    if (seconds < 10) seconds = '0' + seconds;

    if (seconds % 60 == 0) {
        seconds = '00';
        minutes++;
        if (minutes < 10) minutes = '0' + minutes;

        if (minutes % 60 == 0) {
            minutes = '00';
            hours++;
            if (hours < 10) hours = '0' + hours;
        }
    }

    $('#timerClock').text(hours + ':' + minutes + ':' + seconds);

    timerId = setTimeout(tick, 1000); // (*)
}

$('#timerStart').on('click', function () {
    var timerId = setTimeout(tick(), 1000);
});

$('#timerPause').on('click', function () {
    clearTimeout(timerId);
});

$('#timerStop').on('click', function () {
    clearTimeout(timerId);
    hours = '00';
    minutes = '00';
    seconds = '00';
    $('#timerClock').text('00:00:00');
});

