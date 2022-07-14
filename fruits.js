const border1 = document.querySelector('#border1')
for (element of border1.children) {
    element.setAttribute('class', 'cards_Fruits')
}
const cards_Fruits = document.querySelectorAll('.cards_Fruits')
cards_Fruits.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.children[1].classList.remove('invisible')
        setTimeout(() => { element.children[1].classList.add('invisible') }, 2000)
    })
})
