let scrollPosition = window.scrollY

const header = document.querySelector(".header")
const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("bg-green")
const remove_class_on_scroll = () => header.classList.remove("bg-green")

window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY

    if (scrollPosition >= scrollChange) {
        add_class_on_scroll()
    } else {
        remove_class_on_scroll()
    }

})