/****************Preloader *****************/

// Variable del loader
const preloader = document.querySelector(`#loader`);

const cerrarLoader = () => preloader.classList.add(`close-loader`)

window.addEventListener('DOMContentLoaded', cerrarLoader);

const imgFixed = document.querySelectorAll(".jarallax")

jarallax(imgFixed, {
    speed: 0.2
});


AOS.init({
    once: true,
    duration: 800
});