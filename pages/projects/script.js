// ==========   OPEN MENU AND OPTIONS    ==========

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

// ==========   SHOW PROJECTS    ==========
import projects from "./projects-list.js";

function appReload(projects) {
    showProjects(getFilteredProjects(projects))
    updateProjectsNumber(getFilteredProjects(projects).length)
}

function showProjects(list) {
    const elementPortfolioList = document.getElementById("portfolio-list")
    elementPortfolioList.innerHTML = ""

    list.forEach(item => {
        const elementItem = `
            <li class="portfolio-item">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <div class="img-div">
                <a href="${item.link}" target="_blank">
                    <img src="${item.previewImage}" alt="imagem do projeto ${item.title}">
                </a>
                </div>
                <ul class="tags">
                    ${item.tags.map(tag => `
                        <li class="tag">
                        ${tag.link === undefined ? `
                            <abbr title="${tag.abbrTitle}">${tag.abbrContent}</abbr>
                        ` : `
                            <a href="${tag.link}" target="_blank">
                                <abbr title="${tag.abbrTitle}">${tag.abbrContent}</abbr>
                            </a>
                        `}
                        </li>
                    `).join("")}
                </ul>
            </li>
        `
        elementPortfolioList.innerHTML += elementItem
    })
}

function getFilteredProjects(projects) {
    const filterValue = document.querySelector("#filterBy").value
    if (filterValue !== "Todos") {
        projects = projects.filter(project => {
            return project.tags.find(
                tag => tag.abbrContent === filterValue
            ) && !""
        })
    }
    return projects
}

function updateProjectsNumber(number) {
    document.querySelector("#projects-number").textContent = number
}

document.querySelector("#filterBy").onchange = () => appReload(projects)

appReload(projects)