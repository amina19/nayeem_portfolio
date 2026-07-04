/*==============================
PAGE LOAD ANIMATION
==============================*/

window.addEventListener("load", () => {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(item => {

        item.classList.add("show");

    });

});

