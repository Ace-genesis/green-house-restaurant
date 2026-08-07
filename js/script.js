/* ==========================================
   IMPORT MODULES
========================================== */

import "./reusable.js";

import {

    initMenuFilters,
    initGalleryFilters,
    initFAQ

} from "./ui.js";

import {

    initReservationForm,
    initContactForm

} from "./forms.js";


/* ==========================================
   HERO BUTTON
========================================== */

function initHeroButton(){

    const heroButton = document.querySelector(".hero-order-btn");

    if(!heroButton) return;

    heroButton.addEventListener("click",()=>{

        heroButton.textContent = "Redirecting...";

        heroButton.disabled = true;

        setTimeout(()=>{

            window.location.href = "/pages/menu.html";

        },800);

    });

}


/* ==========================================
   INITIALIZE APPLICATION
========================================== */

function init(){

    initHeroButton();

    initMenuFilters();

    initGalleryFilters();

    initFAQ();

    initReservationForm();

    initContactForm();

}


init();