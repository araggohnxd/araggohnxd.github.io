const elements = document.querySelector(".elements");
const btnRight = document.querySelector(".button-arrow.-right");
const btnLeft = document.querySelector(".button-arrow.-left");
let pixels = 0;

btnRight.addEventListener("click", scrollToRight);
btnLeft.addEventListener("click", scrollToLeft);

function scrollToRight() {
    pixels = pixels + 50;
    elements.style = `transform: translateX(${pixels}px)`;
};

function scrollToLeft() {
    pixels = pixels - 50;
    elements.style = `transform: translateX(${pixels}px)`;
};