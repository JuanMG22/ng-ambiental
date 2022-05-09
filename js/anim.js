/****************Preloader *****************/

// Variable del loader
const preloader = document.querySelector(`#loader`);

const cerrarLoader = () => preloader.classList.add(`close-loader`)

window.addEventListener('load', cerrarLoader);


AOS.init({
    once: true,
    duration: 800
});