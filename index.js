const menu = document.querySelector('.fa-bars')
const nav = document.querySelector('.nav_links')
console.log(nav)


console.log(menu)
menu.addEventListener('click', display)

function display(){
nav.classList.toggle('none')
console.log('yes')
}