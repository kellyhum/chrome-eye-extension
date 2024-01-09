const countdown = () => {
    const element = document.querySelector('#timer');
    let timer = 10;

    const updateTimer = () => {
        element.innerText = timer;
        
        if (timer <= 0) {
            clearInterval(interval);
            element.innerText = 'timer stopped';
        }

        timer--;
    }

    const interval = setInterval(updateTimer, 1000);
}

countdown();
