const header = document.querySelector('h1');
const btn = document.querySelector('#startButton');
const pauseBtn = document.querySelector('#pauseButton');
let time = 10;
let milliseconds = time * 1000;


btn.addEventListener('click', () => {
    let countdown = setInterval(() => {
        time--;
        header.textContent = `Countdown: ${time}`;
    }, 1000);


    let timeout = setTimeout(() => {
        clearInterval(countdown);
        header.textContent = "Time's up!";
    }, milliseconds);

    pauseBtn.addEventListener('click', () => {
        let timeRest = time;
        clearInterval(countdown);
        clearTimeout(timeout);
        header.textContent = `Countdown paused at ${timeRest}.`;
    }
    );


}
);


