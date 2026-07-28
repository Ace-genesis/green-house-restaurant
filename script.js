const heroOrderButton = document.querySelector('.hero-order-btn')
const hamburger = document.querySelector('.menu-toggle')
const navList = document.querySelector('.nav-list-items')


heroOrderButton.addEventListener('click', function(){
    heroOrderButton.textContent ='Ordering...'
    heroOrderButton.disabled = true;
})


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navList.classList.toggle('active')
})