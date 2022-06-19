const days = document.querySelectorAll('days');
const hours = document.querySelectorAll('hours');
const minutes = document.querySelectorAll('minutes');
const seconds = document.querySelectorAll('seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date('January 1 ${currentYear + 1} 00:00:00');

//update countdowntime

function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    
    days.innerHTML = d;

}

setInterval(updateCountdown, 1000);