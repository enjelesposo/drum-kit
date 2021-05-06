const keys = document.querySelectorAll('.key');

// keys.forEach(key => key.addEventListener('transitionend', removeTransition()));

window.addEventListener('keydown', playSound);

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // look for audio that has the same data-key
    const keyDiv = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio){
        return; // stops functon from running
    }
    audio.currentTime = 0;  // enables the drum to be played in succession
    audio.play();
    keyDiv.classList.add('playing');
}