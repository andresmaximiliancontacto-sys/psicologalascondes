/*==================================================
HEADER SCROLL
==================================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/*==================================================
MENÚ MOBILE
==================================================*/

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("menu-overlay");

function openMenu() {

    navMenu.classList.add("active");

    menuToggle.classList.add("active");

    overlay.classList.add("active");

    document.body.classList.add("menu-open");

    menuToggle.setAttribute("aria-expanded", "true");

}

function closeMenu() {

    navMenu.classList.remove("active");

    menuToggle.classList.remove("active");

    overlay.classList.remove("active");

    document.body.classList.remove("menu-open");

    menuToggle.setAttribute("aria-expanded", "false");

}

menuToggle.addEventListener("click", () => {

    if (navMenu.classList.contains("active")) {

        closeMenu();

    } else {

        openMenu();

    }

});

overlay.addEventListener("click", closeMenu);


/*==================================================
CERRAR AL PULSAR UN LINK
==================================================*/

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        closeMenu();

    });

});


/*==================================================
ESC
==================================================*/

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        closeMenu();

    }

});


/*==================================================
SCROLL SUAVE
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        window.scrollTo({

            top: target.offsetTop - 90,

            behavior: "smooth"

        });

    });

});


/*==================================================
SCROLLSPY
==================================================*/

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 160;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==================================================
FADE UP
==================================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(".fade-up").forEach(el => {

    observer.observe(el);

});