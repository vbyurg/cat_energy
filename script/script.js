// menu
window.addEventListener('click', ({
    target
}) => {
    const isClickedOnPopup = target.closest('.header-nav') !== null || target.closest('.burger') !== null;

    if (!isClickedOnPopup) {
        const popup = document.querySelector('.header-nav');
        if (popup.classList.contains('animate')) {
            popup.classList.remove('animate');
            document.querySelector('.burger span').classList.remove('active');
        }
    }
});

document.querySelector('.burger').addEventListener('click', function (active) {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.header-nav').classList.toggle('animate');
});


// cat slider

const body = document.body;
const slider = document.querySelector('.example__slider');
const before = slider.querySelector('.before');
const beforeImage = before.querySelector('img');
const change = slider.querySelector('.change');

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
    let width = slider.offsetWidth;
    beforeImage.style.width = `${width}px`;
})

const moveSlider = (x) => {
    let shift = Math.max(0, Math.min(x, slider.offsetWidth));
    before.style.width = `${shift}px`
    change.style.left = `${shift}px`
}

const pause = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
}

body.addEventListener('mousedown', () => {
    isActive = true;
});

body.addEventListener('mouseup', () => {
    isActive = false;
});

body.addEventListener('mouseleave', () => {
    isActive = false;
});

body.addEventListener('mousemove', (e) => {
    if (!isActive) {
        return;
    };

    let x = e.pageX;
    x -= slider.getBoundingClientRect().left;

    moveSlider(x);
    pause(e);
});



change.addEventListener('touchstart', () => {
    isActive = true;
});

body.addEventListener('touchend', () => {
    isActive = false;
});

body.addEventListener('touchcancel', () => {
    isActive = false;
});

body.addEventListener('touchmove', (e) => {
    if (!isActive) {
        return;
    }

    let x;
    let i;
    
    for (i = 0; i < e.changedTouches.length; i++) {
        x = e.changedTouches[i].pageX;
    }

    x -= slider.getBoundingClientRect().left;

    beforeAfterSlider(x);
    pauseEvents(e);
});