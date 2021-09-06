let slides = document.querySelectorAll('.slide');
let buttons = document.querySelectorAll('.btn');
let slideNav = 1;

function manualSlide(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
        buttons.forEach((button) => {
            button.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    buttons[manual].classList.add('active');
}

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        manualSlide(i);
        slideNav = i;
    });
});