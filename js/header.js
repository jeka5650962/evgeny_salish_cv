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