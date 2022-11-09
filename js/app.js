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

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUpEl = document.getElementById("scroll-up");

    // When the scroll is higher than 350 viewport height, add the show-scroll class else remove it
    this.scrollY >= 350 ? scrollUpEl.classList.add("show-scroll") : scrollUpEl.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTION ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    })
}

window.addEventListener("scroll", scrollActive);