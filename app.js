import { popularCars, recomendationCars, recentCars } from "./data.js"
import {renderProducts} from "./functions.js"


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
    const popularCarsWrapper = document.querySelector('section.popular-car .wrapper')
    const recomendationCarsWrapper = document.querySelector('section.recomendation-car .wrapper')

    console.log('main page');


    renderProducts(popularCars, popularCarsWrapper)
    renderProducts(recomendationCars, recomendationCarsWrapper)


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
    const recentCarsWrapper = document.querySelector('section.recent-car .wrapper')
    const recomendationCarsWrapper = document.querySelector('section.recommendation-car .wrapper')
    console.log(recomendationCarsWrapper)


    const readMoreBtns = document.querySelectorAll("button.read-more-btn") 
    
    renderProducts(recentCars, recentCarsWrapper)
    renderProducts(recomendationCars, recomendationCarsWrapper)
        readMoreBtns.forEach((btn)=>{
            btn.addEventListener('click', (event)=>{
            const reviewParagraph = event.target.parentElement.previousElementSibling 
            reviewParagraph.classList.toggle('expand')
        })
    })


}















