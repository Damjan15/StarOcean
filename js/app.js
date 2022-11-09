/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const header = document.getElementById("header");
const scrollUpEl = document.getElementById("scroll-up");
const navLink = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("section[id]");

/*=============== FUNCTIONS ===============*/

// Show menu
function showMenu() {
    if(navToggle) {
        navMenu.classList.add("show-menu");
    }
}

// Hide menu
function hideMenu() {
    if (navClose) {
        navMenu.classList.remove("show-menu");
    }
}

// Remove menu on link click
function removeMenu() {
    navMenu.classList.remove("show-menu");
}

// Change header background
function scrollHeader() {
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}

// Show scroll up button
function scrollUp() {
    this.scrollY >= 350 ? scrollUpEl.classList.add("show-scroll") : scrollUpEl.classList.remove("show-scroll");
}

// Set active link when scrolled to correct section
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

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true, // Animations repeat
})

sr.reveal(`.home__img .newsletter__container, .footer__logo, .footer__description, .footer__content, .footer__info`);
sr.reveal(`.home__data`, {origin: 'bottom'});
sr.reveal(`.about__data, .recently__data`, {origin: 'left'});
sr.reveal(`.about__img, .recently__img`, {origin: 'right'});
sr.reveal(`.popular__card`, {interval: 100});

/*=============== EVENT LISTENERS ===============*/
navToggle.addEventListener("click", showMenu);
navClose.addEventListener("click", hideMenu);
navLink.forEach((link) => link.addEventListener("click", removeMenu));
window.addEventListener("scroll", () => {
    scrollHeader();
    scrollUp();
    scrollActive();
})