const headerContainer = document.querySelector('.header-container')
const footerContainer = document.querySelector('.reusable-footer')


async function getHeader(){
    const result = await fetch('/pages/header.html');
    const data = await result.text()

    headerContainer.innerHTML = data

    retrieveElements()

    setActiveLink()
}

async function getFooter(){
    const result = await fetch('/pages/footer.html')
    const data = await result.text()

    footerContainer.innerHTML = data
}

function retrieveElements(){

    const hamburger = document.querySelector('.menu-toggle')

    const navList = document.querySelector('.nav-list-items')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navList.classList.toggle('active')
})
}

function setActiveLink(){

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll(".nav-list-items a");

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        const page = href.split("/").pop();

        if(page === currentPage){

            link.classList.add("active");

        }

    });

}

getHeader()
getFooter()