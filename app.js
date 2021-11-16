const board = document.querySelector('#board')
const SQUAR_NUMBER = 700
// const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple']
// const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const colors = ['red', '#8d0303', '#cf3d3d', '#f06d09', '#f0cd09']

for (let i = 0; i < SQUAR_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
    
}

function setColor(element) {
    // element.style.backgroundColor = 'red'
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor (element) {
    // element.style.backgroundColor = '#1d1d1d'
    element.style.backgroundColor = 'transparent'
    element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}