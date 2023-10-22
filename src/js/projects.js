import projects from "../../projects-list.js";

const listElement = document.getElementById("projects-list")
const currentProjectsNumberElement = document.getElementById("current-projects-number")
const totalProjectsNumberElement = document.getElementById("total-projects-number")

function loadApp() {
    renderProjects(projects, listElement)
    updateProjectsNumber(projects.length, projects.length)
}



// Criar função para filtrar por tipo de projeto

// Criar função para filtrar por tecnologia usada




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

loadApp()