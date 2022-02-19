const menu = document.querySelector(".menu")
const hamburguerMenu = document.querySelector(".hamburguer-menu")

hamburguerMenu.addEventListener("click", () => {
    menu.classList.toggle('show')
    hamburguerMenu.classList.toggle("active")
})

const portfolioOption = document.querySelector(".portfolio-option")
const portfolioOptions = document.querySelector(".portfolio-options")

portfolioOption.addEventListener("click", () => portfolioOptions.classList.toggle("show"))

portfolioOption.addEventListener("mouseover", () => portfolioOptions.classList.add("show"))

portfolioOption.addEventListener("mouseout", () => portfolioOptions.classList.remove("show"))

portfolioOptions.addEventListener("mouseover", () => portfolioOptions.classList.add("show"))

portfolioOptions.addEventListener("mouseout", () => portfolioOptions.classList.remove("show"))