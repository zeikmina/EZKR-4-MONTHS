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
    "Ryan Gosling",

]);