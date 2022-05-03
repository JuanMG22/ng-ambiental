const btnMenu = document.querySelector('#menuBtn')
const menuNav = document.querySelector('.navMenu')

const link1 = document.querySelector('.link1')
const link2 = document.querySelector('.link2')
const link3 = document.querySelector('.link3')
const link4 = document.querySelector('.link4')

const abrirCerrarMenu = () => menuNav.classList.toggle('show')
const cerrarMenu = () => menuNav.classList.remove('show')


btnMenu.addEventListener('click', abrirCerrarMenu)

link1.addEventListener('click', cerrarMenu)
link2.addEventListener('click', cerrarMenu)
link3.addEventListener('click', cerrarMenu)
link4.addEventListener('click', cerrarMenu)