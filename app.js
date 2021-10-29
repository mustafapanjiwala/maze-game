const nextButton = document.querySelector('.next-button');

const levelOne = document.querySelector('.level-one');
const levelTwo = document.querySelector('.level-two');
const uiLevel = document.querySelector('.ui-level');
const uiMessage = document.querySelector('.ui-message');
const spookyPicture = document.querySelector('.spooky-picture');
const scream = document.querySelector('.scream-sound');

const collisionCheck = (value) => {
    if (value === 'maze-border') alert('You lost... try again.');
    if (value === 'finish') {
        nextButton.style.opacity = 1;
        nextButton.style.pointerEvents = 'all';
        levelOne.style.pointerEvents = 'none';
    }
    if (value === 'end-game') {
        scream.play();
        spookyPicture.style.display = 'block';
        document.body.style.background = 'black';
    }
};

window.addEventListener('mousemove', (e) => {
    let check = e.target.classList.value;
    collisionCheck(check);
});

nextButton.addEventListener('click', () => {
    levelOne.style.display = 'none';
    levelTwo.style.display = 'block';
    nextButton.style.opacity = 0;
    nextButton.style.pointerEvents = 'none';
    uiLevel.textContent = 'Level 2';
    uiMessage.textContent = 'One More to to..';
});
