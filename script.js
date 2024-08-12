function getRandomPaleColor() {
    const r = Math.floor(Math.random() * 100) + 150;
    const g = Math.floor(Math.random() * 100) + 150;
    const b = Math.floor(Math.random() * 100) + 150;
    return `rgb(${r},${g},${b})`;
}

function changeBackgroundColor() {
    const color = getRandomPaleColor();
    document.body.style.backgroundColor = color;
}

setInterval(changeBackgroundColor, 2000);
