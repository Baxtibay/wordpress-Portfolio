const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");
const pagination = document.getElementById("pagination");

let index = 1;
let isDragging = false;
let startX = 0;
let currentX = 0;


/* CLONE FIRST & LAST FOR INFINITE LOOP */
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

let allSlides = document.querySelectorAll('.slide');

/* POSITION TRACK TO FIRST REAL SLIDE */
function updatePosition() {
    track.style.transform = `translateX(-${index * 100}%)`;
}
updatePosition();


/* PAGINATION */
slides.forEach((_, i) => {
    const line = document.createElement('div');
    line.classList.add('pageline');
    if (i === 0) line.classList.add('active');
    line.addEventListener('click', () => goToSlide(i + 1));
    pagination.appendChild(line);
});

const lines = document.querySelectorAll('.pageline');

function setActiveDot(i) {
    lines.forEach(dot => dot.classList.remove('active'));
    let realIndex = i - 1;
    if (realIndex >= lines.length) realIndex = 0;
    if (realIndex < 0) realIndex = lines.length - 1;
    lines[realIndex].classList.add('active');
}


/* GOTO SLIDE */
function goToSlide(i) {
    index = i;
    track.style.transition = "0.45s ease";
    updatePosition();
    setActiveDot(index);
}


/* TRANSITION END — LOOP FIX */
track.addEventListener('transitionend', () => {
    if (allSlides[index] === firstClone) {
        track.style.transition = "none";
        index = 1;
        updatePosition();
    }
    if (allSlides[index] === lastClone) {
        track.style.transition = "none";
        index = slides.length;
        updatePosition();
    }
    setActiveDot(index);
});


/* AUTO SLIDE */
setInterval(() => {
    index++;
    track.style.transition = "0.50s ease";
    updatePosition();
}, 3000);

/* SWIPE and DRAG */
const carousel = document.getElementById('carousel');

carousel.addEventListener('touchstart', e => {
    isDragging = true;
    startX = e.touches[0].clientX;
});
carousel.addEventListener('touchend', e => handleSwipe(e.changedTouches[0].clientX));

carousel.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.clientX;
});
carousel.addEventListener('mouseup', e => handleSwipe(e.clientX));

function handleSwipe(endX) {
    if (!isDragging) return;
    const diff = endX - startX;
    
    if (diff > 50) index--;
    if (diff < -50) index++;
    
    track.style.transition = "0.45s ease";
    updatePosition();
    
    isDragging = false;
}