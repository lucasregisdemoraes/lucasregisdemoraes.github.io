// importa a lista de itens do portfolio
import items from "../portfolio-lists/web-development-list.js";


function showPortfolioList(list) {
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
showPortfolioList(items)
