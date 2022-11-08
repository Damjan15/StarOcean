/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Validate if navToggle exists, if it does show menu
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    })
}

// Validate if navClose exists, if it does hide the menu
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
}

// Remove the menu on link click
const navLink = document.querySelectorAll(".nav__link");

const removeMenu = () => {
    navMenu.classList.remove("show-menu");
}

navLink.forEach((link) => link.addEventListener("click", removeMenu));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header");

    // When the scroll is greater than 50 viewport height, add the bg header class, else remove the class
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}

window.addEventListener("scroll", scrollHeader);