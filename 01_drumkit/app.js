function playAudio(keyCode) {
    let audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
}

window.addEventListener('keydown', (e) => playAudio(e.keyCode));