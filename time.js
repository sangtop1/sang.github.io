var getvalue = function () {
    var number = document.getElementById('number').value;
    number++;
    if (number == 120) {
        number = 0;
        var second = document.getElementById('second').value;
        second++;
        if (second == 5) {
            second = 0;
            var minute = document.getElementById('minute').value;
            minute++;
            if (minute == 5) {
                minute = 0;
                var hour = document.getElementById('hour').value;
                hour++;
                document.getElementById('hour').value = hour;
            }
            document.getElementById('minute').value = minute;
        }
        document.getElementById('second').value = second;

    }
    document.getElementById('number').value = number;

}
function start() {
    clear = setInterval(getvalue, 1);
    // setInterval
}
function stop() {
    clearInterval(clear);/*clearinerval*/
}