/*==============================
PAGE LOAD ANIMATION
==============================*/

window.addEventListener("load", () => {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(item => {

        item.classList.add("show");

    });

});

/*==============================
CAREER STACK ANIMATION
==============================*/


const deckCards = document.querySelectorAll(".deck-card");

deckCards.forEach(card => {

    card.addEventListener("mouseenter", activateCard);

    card.addEventListener("click", activateCard);

    card.addEventListener("mouseleave", deactivateCard);

});

function activateCard(e){

    deckCards.forEach(c=>c.classList.remove("active"));

    e.currentTarget.classList.add("active");

}


function deactivateCard(e){

    e.currentTarget.classList.remove("active");
    const herocard = document.querySelector(".hero-card");
    herocard.classList.add("active");

}
