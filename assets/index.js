const border1 = document.querySelector('.border1')
for (element of border1.children) {
    element.setAttribute('class', 'cards_Fruits')
}
const cards_Fruits = document.querySelectorAll('.cards_Fruits')
cards_Fruits.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.children[1].classList.remove('invisible')
        setTimeout(() => { element.children[1].classList.add('invisible') }, 2500)
    })
})



const border2 = document.querySelector('.border1')
for (element of border2.children) {
    element.setAttribute('class', 'cards_Fruits2')
}
const cards_Fruits2 = document.querySelectorAll('.cards_Fruits2')
cards_Fruits2.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.children[2].classList.add('invisible2')
        setTimeout(() => { element.children[2].classList.remove('invisible2') }, 2500)
    })
})




const toggleButton = document.getElementById('toggleButton');
const naviList = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
    naviList.classList.toggle('active');
})