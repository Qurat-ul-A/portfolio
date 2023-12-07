const burger=document.querySelector('.burger')
const navbarItems=document.querySelector('.navbar')
const nav=document.querySelector('.items')

burger.addEventListener('click',()=>{
    navbarItems.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})