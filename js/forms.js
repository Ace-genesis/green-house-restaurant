/* ==========================================
   NOTIFICATION
========================================== */

function showNotification(message, type = "success"){

    let notification = document.querySelector(".notification");

    if(!notification){

        notification = document.createElement("div");

        notification.className = "notification";

        document.body.appendChild(notification);

    }

    notification.textContent = message;

    notification.classList.remove("success","error","show");

    notification.classList.add(type);

    requestAnimationFrame(() => {

        notification.classList.add("show");

    });

    setTimeout(() => {

        notification.classList.remove("show");

    },3000);

}



/* ==========================================
   VALIDATION
========================================== */

function validateEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

function validatePhone(phone){

    return /^[0-9+\-\s()]{7,20}$/.test(phone);

}



/* ==========================================
   RESERVATION FORM
========================================== */

export function initReservationForm(){

    const form = document.querySelector("#reservationForm");

    if(!form) return;

    const dateInput = document.querySelector("#date");

    const today = new Date().toISOString().split("T")[0];

    dateInput.min = today;

    form.addEventListener("submit",(event)=>{

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();

        const email = document.querySelector("#email").value.trim();

        const phone = document.querySelector("#phone").value.trim();

        const date = document.querySelector("#date").value;

        const time = document.querySelector("#time").value;

        const guests = document.querySelector("#guests").value;

        if(!name || !email || !phone || !date || !time || !guests){

            showNotification(
                "Please complete all required fields.",
                "error"
            );

            return;

        }

        if(!validateEmail(email)){

            showNotification(
                "Please enter a valid email address.",
                "error"
            );

            return;

        }

        if(!validatePhone(phone)){

            showNotification(
                "Please enter a valid phone number.",
                "error"
            );

            return;

        }

        showNotification(
            "Reservation request submitted successfully!",
            "success"
        );

        form.reset();

        dateInput.min = today;

    });

}



/* ==========================================
   CONTACT FORM
========================================== */

export function initContactForm(){

    const form = document.querySelector("#contactForm");

    if(!form) return;

    form.addEventListener("submit",(event)=>{

        event.preventDefault();

        const name = document.querySelector("#contact-name").value.trim();

        const email = document.querySelector("#contact-email").value.trim();

        const phone = document.querySelector("#contact-phone").value.trim();

        const subject = document.querySelector("#subject").value.trim();

        const message = document.querySelector("#contact-message").value.trim();

        if(!name || !email || !subject || !message){

            showNotification(
                "Please complete all required fields.",
                "error"
            );

            return;

        }

        if(!validateEmail(email)){

            showNotification(
                "Please enter a valid email address.",
                "error"
            );

            return;

        }

        if(phone && !validatePhone(phone)){

            showNotification(
                "Please enter a valid phone number.",
                "error"
            );

            return;

        }

        showNotification(
            "Message sent successfully!",
            "success"
        );

        form.reset();

    });

}