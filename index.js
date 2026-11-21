function rotateText(selector, words) {
    const text = document.querySelector(selector);
    let currentIndex = Math.floor(Math.random() * words.length);

    text.textContent = words[currentIndex];

    setInterval(() => {
        text.classList.add("fade");

        setTimeout(() => {
            let newIndex;

            do {
                newIndex = Math.floor(Math.random() * words.length);
            } while (newIndex === currentIndex);

            currentIndex = newIndex;
            text.textContent = words[currentIndex];

            text.classList.remove("fade");
        }, 500);

    }, 3000);
}


const openButton = document.getElementById("openLetter");
const intro = document.getElementById("intro");
const curtains = document.getElementById("curtains");
const letter = document.getElementById("letter");
const music = document.getElementById("backgroundMusic");

const finalStarContainer = document.getElementById("finalStarContainer");
const finalStar = document.getElementById("finalStar");
const finalMessage = document.getElementById("finalMessage");


openButton.addEventListener("click", () => {

    openButton.disabled = true;

    intro.classList.add("closing");

    curtains.classList.add("opening");
    letter.classList.add("revealed");

    setTimeout(() => {
        intro.style.display = "none";
    }, 1000);


    music.volume = 0;
    music.currentTime = 0;

    music.play().then(() => {

        const targetVolume = 0.15;
        const fadeDuration = 4000;
        const interval = 50;
        const volumeStep = targetVolume / (fadeDuration / interval);

        const fadeIn = setInterval(() => {

            if (music.volume + volumeStep >= targetVolume) {
                music.volume = targetVolume;
                clearInterval(fadeIn);
            } else {
                music.volume += volumeStep;
            }

        }, interval);

    }).catch(error => {
        console.error("Music playback failed:", error);
    });

    setTimeout(() => {

        rotateText(".kirsten", [
            "Kirsten",
            "my dearest one of all",
            "my sweet beloved",
            "my honey",
            "my baby girl",
            "my queen",
            "my cutie patootie"
        ]);

        rotateText(".ezekiel", [
            "Ezekiel",
            "your dearest",
            "your love",
            "your cutiepie",
            "your beautiful princess with a disorder",
            "Ryan Gosling"
        ]);

    }, 1800);

    setTimeout(() => {
        finalStarContainer.classList.add("visible");
    }, 30000);

});


finalStar.addEventListener("click", () => {

    finalStar.disabled = true;

    letter.style.transition =
        "opacity 1.5s ease, transform 1.5s ease";

    letter.style.opacity = "0";
    letter.style.transform = "scale(0.95)";

    // Reveal final message
    setTimeout(() => {
        finalMessage.classList.add("show");
    }, 800);

});
