const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const celebrate = document.getElementById("celebrate");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
    celebrate.style.display = "block";

    if (typeof confetti === "function") {
        confetti({
            particleCount: 250,
            spread: 120,
            origin: { y: 0.6 }
        });
    }
});
