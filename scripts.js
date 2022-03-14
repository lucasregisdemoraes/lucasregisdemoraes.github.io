const body = document.querySelector("body")
const hamburguerMenu = document.querySelector(".hamburguer-menu")
const closeMenu = document.querySelector(".close-menu")
const menuOptions = document.querySelector(".menu-options")
const contactMenuItem = document.querySelector(".menu-options a[href='#contact']")
const toggleMenuItens = [hamburguerMenu, closeMenu]

toggleMenuItens.forEach(e => {
    e.addEventListener('click', toggleMenu)
})

function toggleMenu() {
    closeMenu.classList.toggle('show')
    menuOptions.classList.toggle('show')
    body.classList.toggle('open-menu')
}

contactMenuItem.addEventListener('click', () => {
    closeMenu.classList.remove('show')
    menuOptions.classList.remove('show')
    body.classList.remove('open-menu')
})