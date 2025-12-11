const mainElement = document.createElement('main')
const h1Element = document.createElement('h1')
const pElement = document.createElement('p')
const spanElement = document.createElement('span')

const bodyElement = document.querySelector('body')

h1Element.innerHTML = "Daniel Ventura de Almeida"
pElement.innerHTML = "Desenvolvedor"
spanElement.innerHTML = "Cataguases - MG"

mainElement.classList.add('flex', 'flex-col', 'gap-4')

h1Element.style.fontSize = '2.4rem'
pElement.style.fontSize = '1.8rem'
spanElement.style.fontSize = '1.4rem'

bodyElement.appendChild(mainElement)
mainElement.appendChild(h1Element)
mainElement.appendChild(pElement)
mainElement.appendChild(spanElement)