const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const celebrate = document.getElementById("celebrate");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {

    celebrate.style.display = "block";

    // 🎉 Fireworks
    fireConfetti();

    // ❤️ Heart Rain
    startHeartRain();

});


function fireConfetti(){

    const duration = 3000;
    const end = Date.now() + duration;

    (function frame(){

        confetti({
            particleCount:6,
            angle:60,
            spread:70,
            origin:{x:0}
        });

        confetti({
            particleCount:6,
            angle:120,
            spread:70,
            origin:{x:1}
        });

        if(Date.now() < end){
            requestAnimationFrame(frame);
        }

    })();

}


function startHeartRain(){

    for(let i=0;i<80;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.className="heartRain";

        heart.style.left=Math.random()*100+"vw";

        heart.style.animationDuration=(3+Math.random()*4)+"s";

        heart.style.fontSize=(18+Math.random()*24)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },7000);

    }

}
