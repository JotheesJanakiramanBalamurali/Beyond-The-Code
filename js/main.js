// Theme Toggle
const themebutton = document.getElementById("theme-button");

themebutton.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themebutton.textContent = "☾ Dark";
    } else {
        themebutton.textContent = "☀ Light";
    }
});


// Journey Carousel
const journeyCards = document.querySelectorAll(".journey-card");

let activeIndex = 4;

function updateJourneyCarousel() {
    journeyCards.forEach((card) => {
        card.classList.remove("active", "left", "right", "hidden");
    });

    const leftIndex =
        (activeIndex + journeyCards.length - 1) % journeyCards.length;

    const rightIndex =
        (activeIndex + 1) % journeyCards.length;

    journeyCards[activeIndex].classList.add("active");
    journeyCards[leftIndex].classList.add("left");
    journeyCards[rightIndex].classList.add("right");

    journeyCards.forEach((card) => {
        if (
            !card.classList.contains("active") &&
            !card.classList.contains("left") &&
            !card.classList.contains("right")
        ) {
            card.classList.add("hidden");
        }
    });
}

updateJourneyCarousel();

journeyCards.forEach((card, index) => {
    card.addEventListener("click", function () {
        if (
            card.classList.contains("left") ||
            card.classList.contains("right")
        ) {
            activeIndex = index;
            updateJourneyCarousel();
        }
    });
});

