const container = document.getElementById('container')
const colors = ['#d16ba5', '#c777b9', '#ba83ca', '#aa8fd8', '#9a9ae1', '#8aa7ec', '#79b3f4', '#69bff8', '#52cffe', '#41dfff', '#46eefa', '#5ffbf1']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseout', () => removeColor(square))

  container.appendChild(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = `#1d1d1d`
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}