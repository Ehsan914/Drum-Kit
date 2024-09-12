function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    
    if(!key) return;

    key.classList.add('playing');
    key.addEventListener('transitionend', () => {
        key.classList.remove('playing');
    });
    
    audio.currentTime = 0;
    audio.play();
    console.log(e);
    //const duration = audio.duration;
    //console.log(duration);
}

window.addEventListener('keydown', playSound);