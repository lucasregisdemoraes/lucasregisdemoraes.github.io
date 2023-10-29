import projects from "../../projects-list.js";
projects.sort((a, b) => a.title > b.title ? 1 : b.title > a.title ? -1 : 0)

const listElement = document.getElementById("projects-list")
const currentProjectsNumberElement = document.getElementById("current-projects-number")
const totalProjectsNumberElement = document.getElementById("total-projects-number")
const filterByElement = document.getElementById("filterBy")
const techElements = document.getElementsByName("tech")

function loadApp() {
    let projectsList = getFilteredProjects(filterByElement.value)
    projectsList = getFilteredProjectsByTechs(projectsList)
    renderProjects(projectsList, listElement)
    updateProjectsNumber(projectsList.length, projects.length)
}

function getFilteredProjects(filterValue) {
    return filterValue === "Todos" ? projects
        :
        projects.filter(project =>
            project.filterBy.find(item => item.name == filterValue)
        )
}

function getFilteredProjectsByTechs(projects) {
    const activeTechs = []

    techElements.forEach(tech => {
        if (tech.checked) {
            activeTechs.push(tech.value)
        }
    })

    return projects.filter(project => project.techs
        .find(tech => activeTechs
            .find(activeTech => tech.toLowerCase() === activeTech)))
}

function updateProjectsNumber(currentProjectsNumber, totalProjectsNumber) {
    currentProjectsNumberElement.textContent = currentProjectsNumber
    totalProjectsNumberElement.textContent = totalProjectsNumber
}

function getTechIcon(tech) {
    let techIconName = tech.toLowerCase()
    techIconName = techIconName.replaceAll(" ", "")

    const techs = {
        html: "html5",
        css: "css3",
        javascript: "javascript",
        sass: "sass",
        react: "react",
        reactnative: "react",
    }

    return `<ion-icon name="logo-${techs[techIconName]}" title="${tech}"></ion-icon>`
}

function renderProjects(projects, listElement) {
    listElement.innerHTML = ""
    projects.forEach(({ title, link, previewImage, techs }) => {
        const li = document.createElement("li")
        li.innerHTML = `
                <div class="image-container">
                <a href="${link}" target="_blank" rel="noopener noreferrer external">
                    <img src="${previewImage}" alt="Imagem do projeto ${title}">
                    <span class="sr-only">${title}</span>
                </a>
                <ul class="techs">
                    ${techs.map(tech => `
                    <li>
                        ${getTechIcon(tech)}
                    </li>`).join("")}
                </ul>
                </div>
                <h2>${title}</h2>
        `
        listElement.appendChild(li)
    })
}

filterByElement.onchange = loadApp

techElements.forEach(el => {
    el.onchange = loadApp
})

loadApp()