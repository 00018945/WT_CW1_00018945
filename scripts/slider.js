const sliderTrack = document.querySelector('.slider-track');
const previousBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const serviceCards = document.querySelectorAll('.service-card');

let currentIndex = 0;
const cardCount = serviceCards.length;
const visibleCards = 3; // 3 cards visbil

// replicate 1st and last card for loop
const cloneFirst = sliderTrack.firstElementChild.cloneNode(true);
const cloneLast = sliderTrack.lastElementChild.cloneNode(true);
sliderTrack.appendChild(cloneFirst);
sliderTrack.insertBefore(cloneLast, sliderTrack.firstElementChild);

// update positipn
const updateSlider = () => {
    const cardWidth = serviceCards[0].offsetWidth;
    sliderTrack.style.transform = `translateX(-${(currentIndex + 1) * cardWidth}px)`;
};

// next slide
const slideNext = () => {
    const cardWidth = serviceCards[0].offsetWidth;
    if (currentIndex < cardCount - 1) {
        currentIndex++;
    } else {
        sliderTrack.style.transition = 'none';
        currentIndex = 0;
        sliderTrack.style.transform = `translateX(-${cardWidth}px)`;
        setTimeout(() => (sliderTrack.style.transition = 'transform 0.6s ease'));
    }
    updateSlider();
};

//previous slide
const slidePrev = () => {
    const cardWidth = serviceCards[0].offsetWidth;
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        sliderTrack.style.transition = 'none';
        currentIndex = cardCount - 1;
        sliderTrack.style.transform = `translateX(-${cardCount * cardWidth}px)`;
        setTimeout(() => (sliderTrack.style.transition = 'transform 0.6s ease'));
    }
    updateSlider();
};

// Event Listeners
nextBtn.addEventListener('click', slideNext);
previousBtn.addEventListener('click', slidePrev);

// Initialize
const initSlider = () => {
    const cardWidth = serviceCards[0].offsetWidth;
    sliderTrack.style.transform = `translateX(-${cardWidth}px)`;
};

// Reinitialize on window resize
window.addEventListener('resize', initSlider);


initSlider();
