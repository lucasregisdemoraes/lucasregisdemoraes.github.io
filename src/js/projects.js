import projects from "../../projects-list.js";

const listElement = document.getElementById("projects-list")
const currentProjectsNumberElement = document.getElementById("current-projects-number")
const totalProjectsNumberElement = document.getElementById("total-projects-number")

function loadApp() {
    renderProjects(projects, listElement)
    updateProjectsNumber(projects.length, projects.length)
}

function updateProjectsNumber(currentProjectsNumber, totalProjectsNumber) {
    currentProjectsNumberElement.textContent = currentProjectsNumber
    totalProjectsNumberElement.textContent = totalProjectsNumber
}

function renderProjects(projects, listElement) {
    listElement.innerHTML = ""
    projects.forEach(project => {
        const li = document.createElement("li")
        li.innerHTML = `
            <li>
                <a href="#">
                    <img src="${project.previewImage}" alt="${project.title}">
                    <span class="sr-only">Projeto</span>
                </a>
            </li>
        `
        listElement.appendChild(li)
    })
}

loadApp()