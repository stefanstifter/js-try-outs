function playAudio(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const button = document.querySelector(`button[data-key="${keyCode}"]`);
    if (!audio) return;
    button.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

window.addEventListener('keydown', (e) => playAudio(e.keyCode));
Array.from(document.querySelectorAll('.transition'))
    .forEach(key => {
        key.addEventListener('click', (e) => playAudio(e.target.dataset.key));
        key.addEventListener('transitionend', removeTransition);
    });