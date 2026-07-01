// Future: counters, timeline, parallax, cursor glow
const progress = document.querySelector(".timeline-progress");
const timeline = document.querySelector(".timeline");

window.addEventListener("scroll", () => {

    if(!timeline) return;

    const rect = timeline.getBoundingClientRect();

    const total = timeline.offsetHeight;

    const visible = window.innerHeight - rect.top;

    const percent = Math.max(
        0,
        Math.min(visible / total, 1)
    );

    progress.style.height = `${percent * 100}%`;

});

const cards = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.25
});

cards.forEach(card=>observer.observe(card));