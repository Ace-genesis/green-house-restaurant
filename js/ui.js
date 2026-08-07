
const heroOrderButton = document.querySelector('.hero-order-btn')


if (heroOrderButton) {
    heroOrderButton.addEventListener("click", function () {
        heroOrderButton.textContent = "Ordering...";
        heroOrderButton.disabled = true;
    });
}



/* ==========================================
   MENU FILTER
========================================== */

export function initMenuFilters(){

    const filterButtons = document.querySelectorAll(".filter-btn");

    const menuCards = document.querySelectorAll(".menu-card");

    if(filterButtons.length === 0) return;

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            const filter = button.dataset.filter;

            menuCards.forEach(card => {

                if(filter === "all"){

                    card.style.display = "block";

                    return;

                }

                card.style.display =

                    card.dataset.category === filter

                    ? "block"

                    : "none";

            });

        });

    });

}


/* ==========================================
   GALLERY FILTER
========================================== */

export function initGalleryFilters(){

    const filterButtons = document.querySelectorAll(".gallery-filter-btn");

    const galleryCards = document.querySelectorAll(".gallery-card");

    if(filterButtons.length === 0) return;

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            const filter = button.dataset.filter;

            galleryCards.forEach(card => {

                if(filter === "all"){

                    card.style.display = "block";

                    return;

                }

                card.style.display =

                    card.dataset.category === filter

                    ? "block"

                    : "none";

            });

        });

    });

}


/* ==========================================
   FAQ ACCORDION
========================================== */

export function initFAQ(){

    const faqItems = document.querySelectorAll(".faq-item");

    if(faqItems.length === 0) return;

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", () => {

            const isOpen = item.classList.contains("active");

            faqItems.forEach(faq => {

                faq.classList.remove("active");

                faq.querySelector(".faq-answer").style.maxHeight = null;

            });

            if(!isOpen){

                item.classList.add("active");

                answer.style.maxHeight = answer.scrollHeight + "px";

            }

        });

    });

}