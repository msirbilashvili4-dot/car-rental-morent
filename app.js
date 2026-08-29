import { cars } from "./data.js"


let currentPage = window.location.pathname
currentPage = currentPage.split('/')[1].split('.html')[0]

const mobileMenu = document.querySelector('#mobile-menu')
const ctaWrapper = document.querySelector('.cta-wrapper')


mobileMenu.addEventListener('click', handleMenuClick)






function handleMenuClick() {
    console.log('menu button clicked');
    if (ctaWrapper.classList.contains('expanded')) {

        ctaWrapper.classList.remove('expanded')
    } else {
        ctaWrapper.classList.add('expanded')

    }


}
































if (currentPage === 'index') {
    const wrapper = document.querySelector('section.testing .wrapper')
    console.log('main page');
    console.log(cars[0].name);
    console.log(wrapper)
    cars.forEach((car) => {
        const div = document.createElement("div")
        div.textContent=car.name
        wrapper.appendChild(div)
    } )

    const pickupDropoffFilter = document.querySelector('section.pickup-dropoff-filter')

    const inputs = pickupDropoffFilter.querySelectorAll('.filters-wrapper .filter input')

    inputs.forEach((input) => {
        if (input.type === 'date') {
            input.value = new Date().toISOString().split('T')[0]
        } else {
            input.value = new Date().toTimeString().slice(0, 5);
        }
    })

} else if (currentPage === 'filter') {
    console.log('filters page');
    const carsArr = document.querySelectorAll(".wrapper article.card")
    const counterElement = document.querySelector(".counter-wrapper .counter-value")

    counterElement.textContent = carsArr.length

} else if (currentPage === 'product-details') {
    const readMoreBtns = document.querySelectorAll("button.read-more-btn")  
        readMoreBtns.forEach((btn)=>{
            btn.addEventListener('click', (event)=>{
            const reviewParagraph = event.target.parentElement.previousElementSibling 
            reviewParagraph.classList.toggle('expand')
        })
    })
}















