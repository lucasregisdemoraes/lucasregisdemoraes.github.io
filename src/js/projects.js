import projects from "../../projects-list.js";

const listElement = document.getElementById("projects-list")

function createProjectsElements(projects) {
    projects.forEach(project => {
        const li = document.createElement("li")
        li.innerHTML = `
            <li>
                <a href="#">
                    <img src="${project.previewImage}" alt="Projeto">
                    <span class="sr-only">Projeto</span>
                </a>
            </li>
        `
        return li

    })
}

function renderProjects(projects, listElement) {
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

renderProjects(projects, listElement)

