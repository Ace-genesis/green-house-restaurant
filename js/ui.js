
const heroOrderButton = document.querySelector('.hero-order-btn')


if (heroOrderButton) {
    heroOrderButton.addEventListener("click", function () {
        heroOrderButton.textContent = "Ordering...";
        heroOrderButton.disabled = true;
    });
}