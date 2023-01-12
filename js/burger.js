let headerBurger = document.querySelector('.header__burger')
let headerMenu = document.querySelector('.header__menu')
let back = document.querySelector('body')
let headerList = document.querySelector('.header__list')

headerBurger.onclick = function () {
    headerBurger.classList.toggle('active')
    headerMenu.classList.toggle('active')
    back.classList.toggle('lock')
}

headerList.onclick = function () {
    headerList.classList.remove('active')
    back.classList.toggle('lock')
}