const portfolioCarousel = document.querySelector(".portfolio__carousel");
const cards = document.querySelectorAll(".project-card");
const nextBtn = document.querySelector(".portfolio__nav--next");
const prevBtn = document.querySelector(".portfolio__nav--prev");

let currentIndex = 0;
let cardWidth;
let maxIndex;

/* UPDATE SIZES */
function updateSizes() {
    const style = getComputedStyle(portfolioCarousel);
    const gap = parseFloat(style.columnGap || style.gap || 0);

    cardWidth = cards[0].offsetWidth + gap;

    if (window.innerWidth > 1024) {
        maxIndex = 0;
    } else if (window.innerWidth > 640) {
        maxIndex = cards.length - 2;
    } else {
        maxIndex = cards.length - 1;
    }
}

updateSizes();
window.addEventListener("resize", updateSizes);

/* MOVE */
function updateCarousel() {
    portfolioCarousel.style.transform = `translateX(${-(currentIndex * cardWidth)}px)`;
}

/* BUTTONS */
nextBtn.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

/* SWIPE */
let startX = 0;
let isSwiped = false;

portfolioCarousel.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    isSwiped = false; 
});

portfolioCarousel.addEventListener("touchmove", e => {
    if (isSwiped) return; 

    let diff = e.touches[0].clientX - startX;

    if (diff > 70) {
        prevBtn.click();
        isSwiped = true;
    }

    if (diff < -70) {
        nextBtn.click();
        isSwiped = true;
    }
});
