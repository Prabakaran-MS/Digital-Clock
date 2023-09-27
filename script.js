let is24Hours = false;

function toggleFormat() {
    is24Hours = ~is24Hours;
}

function showTime() {
    const now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    const clock = document.getElementById('clock');

    if (is24Hours) {
        clock.textContent = `${hour}:${min<10?'0':''}${min}:${sec<10?'0':''}${sec}`;
    } else {
        if (hour >= 13) {
            clock.textContent = `${hour -12}:${min<10?'0':''}${min}:${sec<10?'0':''}${sec} PM`;
        } else if (hour === 0) {
            clock.textContent = `12:${min<10?'0':''}${min}:${sec<10?'0':''}${sec} AM`;
        } else {
            clock.textContent = `${hour}:${min<10?'0':''}${min}:${sec<10?'0':''}${sec} AM`;
        }
    }
}

setInterval(showTime, 1000);