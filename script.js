const heroOrderButton = document.querySelector('.hero-order-btn')


heroOrderButton.addEventListener('click', function(){
    heroOrderButton.textContent ='Ordering...'
    heroOrderButton.disabled = true;
})


function calculateTotal(price1, price2) {
    return price1 + price2;
}

const total = calculateTotal(2000, 7000)

function showTotal(total){
    console.log('your total is ₦' + total)
}

showTotal(total)