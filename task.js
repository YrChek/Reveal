const reveals = Array.from(document.querySelectorAll('.reveal'))
function visual() {
    for (let el of reveals) {
        if (el.getBoundingClientRect().bottom < 0 || el.getBoundingClientRect().top > window.innerHeight) {
            el.classList.remove('reveal_active')
            continue
        }
        if (el.getBoundingClientRect().bottom < 0 && el.getBoundingClientRect().top < 0) {
            el.classList.remove('reveal_active')
            continue
        }
        el.classList.add('reveal_active')
    }
}

visual()
document.onscroll = visual
