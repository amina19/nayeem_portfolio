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