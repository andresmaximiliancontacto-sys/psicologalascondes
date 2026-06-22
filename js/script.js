const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

window.addEventListener("DOMContentLoaded", () => {

    const fadeUpElements = document.querySelectorAll(".fade-up");

    fadeUpElements.forEach((element) => {

        element.classList.add("show");

    });

});