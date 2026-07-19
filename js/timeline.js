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


//career timeline v3 

/*==================================================
CAREER TIMELINE
PART 4
JavaScript
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
    Reveal Animation
    ==========================================*/

    const rows = document.querySelectorAll(".career-row");

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.18

    });

    rows.forEach(row => revealObserver.observe(row));



    /*==========================================
    Timeline Progress
    ==========================================*/

    const section = document.querySelector("#experience");

    const progress = document.querySelector(".career-progress");

    function updateTimeline(){

        const rect = section.getBoundingClientRect();

        const height = section.offsetHeight;

        const viewport = window.innerHeight;

        let progressValue =
            ((viewport - rect.top) / (height + viewport));

        progressValue = Math.max(0, Math.min(progressValue,1));

        progress.style.height =
            progressValue * 100 + "%";

    }

    window.addEventListener("scroll", updateTimeline);

    window.addEventListener("resize", updateTimeline);

    updateTimeline();



    /*==========================================
    Mouse Parallax
    ==========================================*/

    const cards = document.querySelectorAll(".career-card");

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const centerX = rect.width/2;

            const centerY = rect.height/2;

            const rotateY = (x-centerX)/28;

            const rotateX = -(y-centerY)/28;

            card.style.transform =

                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });



    /*==========================================
    Floating Pills
    ==========================================*/

    document.querySelectorAll(".career-tags span")

        .forEach((pill,index)=>{

            pill.style.animationDelay =
                `${index*80}ms`;

        });



    /*==========================================
    Hover Glow
    ==========================================*/

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect = card.getBoundingClientRect();

            card.style.setProperty(

                "--mouse-x",

                `${e.clientX-rect.left}px`

            );

            card.style.setProperty(

                "--mouse-y",

                `${e.clientY-rect.top}px`

            );

        });

    });

});

document.querySelectorAll(".career-tags span").forEach(pill=>{

    pill.addEventListener("mousemove",(e)=>{

        const rect = pill.getBoundingClientRect();

        pill.style.setProperty(
            "--mouse-x",
            `${e.clientX-rect.left}px`
        );

        pill.style.setProperty(
            "--mouse-y",
            `${e.clientY-rect.top}px`
        );

    });

});

/*=========================================
ACTIVE EXPERIENCE
=========================================*/

const careerRows=document.querySelectorAll(".career-row");

const activeObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            careerRows.forEach(row=>{

                row.classList.remove("active");

            });

            entry.target.classList.add("active");

        }

    });

},{
    threshold:.55
});

careerRows.forEach(row=>{

    activeObserver.observe(row);

});