const animationElements = document.getElementsByClassName("stars-animation")

function createStarsAnimation(element) {
    const star = document.createElement('span')
    star.setAttribute("class", "star")

    let topValue = Math.random() * 100
    let rightValue = Math.random() * 100

    if (topValue < 99 && rightValue < 99) {
        const random = (Math.random() * 4).toFixed(0)
        if (random == 1) {
            rightValue = 0
        } else if (random == 2) {
            rightValue = 100
        } else if (random == 3) {
            topValue = 0
        } else {
            topValue = 100
        }
    }

    const topFixValue = topValue > 99 ? 10 : -10
    const rightFixValue = rightValue == 0 ? -10 : 10

    star.style.setProperty("--top", topValue + topFixValue + "%")
    star.style.setProperty("--right", rightValue + rightFixValue + "%")

    element.appendChild(star)

    setTimeout(() => element.removeChild(star), 5000)
}

[...animationElements].forEach(element => {
    createStarsAnimation(element)
    setInterval(() => createStarsAnimation(element), 100);
});