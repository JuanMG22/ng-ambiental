const btnMenu = document.querySelector('#menuBtn')
const menuNav = document.querySelector('.navMenu')
const hamburguerIcon = document.querySelector('.fa-bars')
const timesIcon = document.querySelector('.fa-times')

const link1 = document.querySelector('.link1')
const link2 = document.querySelector('.link2')
const link3 = document.querySelector('.link3')
const link4 = document.querySelector('.link4')

const abrirCerrarMenu = () => {
    menuNav.classList.toggle('show')
    hamburguerIcon.classList.toggle('d-none')
    timesIcon.classList.toggle('d-none')
}
const cerrarMenu = () => {
    menuNav.classList.remove('show')
    hamburguerIcon.classList.toggle('d-none')
    timesIcon.classList.toggle('d-none')
}


btnMenu.addEventListener('click', abrirCerrarMenu)

link1.addEventListener('click', cerrarMenu)
link2.addEventListener('click', cerrarMenu)
link3.addEventListener('click', cerrarMenu)
link4.addEventListener('click', cerrarMenu)