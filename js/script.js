/* ------------------------------- burger ------------------------------- */

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

/* ------------------------------- form ------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form')
    form.addEventListener('submit', formSend)

    async function formSend(e) {
        e.preventDefault()

        let error = formValidate(form)

        let formData = new FormData(form)

        if (error === 0) {
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            })
            if (response.ok) {
                let result = await response.json()
                alert(result.message)
                form.reset()
            } else {
                alert('Произошла ошибка при отправке формы')
            }
        }
    }

    function formValidate(form) {
        let error = 0
        let formReq = document.querySelectorAll('._req')

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index]
            formRemoveError(input)

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input)
                    error++
                }
            } else {
                if (input.value === '') {
                    formAddError(input)
                    error++
                }
            }
        }
        return error
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error')
        input.classList.add('_error')
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error')
        input.classList.remove('_error')
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
    }
})

/* ------------------------------- header ------------------------------- */

let scrollPosition = window.scrollY

const header = document.querySelector(".header")

const add_class_on_scroll = () => header.classList.add("bg-green")
const remove_class_on_scroll = () => header.classList.remove("bg-green")

window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY

    if (scrollPosition >= 490) {
        add_class_on_scroll()
    } else {
        remove_class_on_scroll()
    }

})

/* ------------------------------- scroll ------------------------------- */

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}