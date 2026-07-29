const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const celebrate = document.getElementById("celebrate");

let yesScale = 1;

// NO button runs away + YES button grows
function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    yesScale += 0.15;
    yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

// YES button celebration
yesBtn.addEventListener("click", () => {

    celebrate.style.display = "block";

    fireConfetti();

    heartRain();

    // Hide the buttons after YES
    document.querySelector(".buttons").style.display = "none";

});

// Fireworks
function fireConfetti(){

    const duration = 3500;
    const end = Date.now() + duration;

    (function frame(){

        confetti({
            particleCount:8,
            angle:60,
            spread:70,
            origin:{x:0}
        });

        confetti({
            particleCount:8,
            angle:120,
            spread:70,
            origin:{x:1}
        });

        confetti({
            particleCount:10,
            spread:360,
            ticks:80
        });

        if(Date.now() < end){
            requestAnimationFrame(frame);
        }

    })();

}

// Falling hearts
function heartRain(){

    for(let i=0;i<120;i++){

        const heart=document.createElement("div");

        heart.className="heartRain";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";
        heart.style.fontSize=(18+Math.random()*30)+"px";
        heart.style.animationDuration=(3+Math.random()*3)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },7000);

    }

}
