const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = parseInt(counter.dataset.target);

        let current = 0;

        const duration = 1500;
        const stepTime = 16;
        const increment = target / (duration / stepTime);

        function update() {

            current += increment;

            if (current >= target) {

                counter.textContent = target;

                return;

            }

            counter.textContent = Math.floor(current);

            requestAnimationFrame(update);

        }

        update();

        counterObserver.unobserve(counter);

    });

}, {

    threshold:0.4

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*====================================
HERO PARALLAX
====================================*/

const hero = document.querySelector("#hero");
const heroBg = document.querySelector(".hero-bg");

let current = 0;
let target = 0;

window.addEventListener("scroll", () => {

    const rect = hero.getBoundingClientRect();

    if(rect.bottom > 0){

        target = window.scrollY * 0.30;

    }

});

/*==========================================
BACK TO TOP
==========================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.style.opacity="1";
        backToTop.style.visibility="visible";
        backToTop.style.transform="translateY(0)";

    }

    else{

        backToTop.style.opacity="0";
        backToTop.style.visibility="hidden";
        backToTop.style.transform="translateY(20px)";

    }

});

const navabr = document.getElementById("navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > window.innerHeight * .75){

        navbar.style.opacity="1";
        navbar.style.visibility="visible";
        navbar.style.transform="translateX(-50%) translateY(0)";

    }

    else{

        navbar.style.opacity="0";
        navbar.style.visibility="hidden";
        navbar.style.transform="translateX(-50%) translateY(-120px)";

    }

});


const heroScroll = document.querySelector(".hero-scroll");

window.addEventListener("scroll",()=>{

    if(window.scrollY>120){

        heroScroll.style.opacity="0";
        heroScroll.style.transform="translateX(-50%) translateY(30px)";

    }else{

        heroScroll.style.opacity="1";
        heroScroll.style.transform="translateX(-50%) translateY(0)";

    }

});
