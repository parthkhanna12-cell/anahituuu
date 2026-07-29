// ===============================
// APPLE LUXURY PROPOSAL
// ===============================

const loader = document.getElementById("welcome-screen");
const beginBtn = document.getElementById("beginBtn");
const main = document.getElementById("main");

const typewriter = document.getElementById("typewriter");
const proposalArea = document.getElementById("proposalArea");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const celebration = document.getElementById("celebration");

const slides = document.querySelectorAll(".slide");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

proposalArea.style.display="none";

// ======================================
// BEGIN BUTTON
// ======================================

beginBtn.onclick = () =>{

    loader.style.opacity="0";

    setTimeout(()=>{

        loader.style.display="none";

        main.style.display="flex";

        main.classList.add("fadeIn");

        startTyping();

        startSlideshow();

        createStars();

        floatingHearts();

        floatingPetals();

    },900);

};

// ======================================
// TYPEWRITER
// ======================================

const message=`From the first time we talked,

I never imagined someone could become this special to me.

Every laugh,
every smile,
every little moment we shared...

has slowly become one of my favourite memories.

You make ordinary days feel extraordinary.

No matter where life takes us,

I hope we keep creating beautiful memories together.

So...

there's just one question I've wanted to ask... ❤️`;

let i=0;

function startTyping(){

function type(){

if(i<message.length){

typewriter.innerHTML+=message.charAt(i);

i++;

setTimeout(type,32);

}else{

proposalArea.style.display="block";

proposalArea.classList.add("fadeIn");

}

}

type();

}

// ======================================
// SLIDESHOW
// ======================================

let current=0;

function startSlideshow(){

setInterval(()=>{

slides[current].classList.remove("active");

current++;

if(current>=slides.length){

current=0;

}

slides[current].classList.add("active");

},3500);

}

// ======================================
// LIGHTBOX
// ======================================

slides.forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

}

});

closeLightbox.onclick=()=>{

lightbox.style.display="none";

};

// ======================================
// NO BUTTON
// ======================================

let scale=1;

function moveNo(){

const x=Math.random()*(window.innerWidth-180);

const y=Math.random()*(window.innerHeight-100);

noBtn.style.position="fixed";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

scale+=0.08;

yesBtn.style.transform=`scale(${scale})`;

}

noBtn.addEventListener("mouseenter",moveNo);

noBtn.addEventListener("click",moveNo);
// ======================================
// STARS
// ======================================

function createStars(){

    const stars=document.getElementById("background-stars");

    for(let i=0;i<120;i++){

        const star=document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*100+"vw";
        star.style.top=Math.random()*100+"vh";

        star.style.animationDelay=Math.random()*3+"s";

        stars.appendChild(star);

    }

}

// ======================================
// FLOATING HEARTS
// ======================================

function floatingHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(18+Math.random()*20)+"px";

        heart.style.animationDuration=(6+Math.random()*5)+"s";

        document.getElementById("floating-hearts").appendChild(heart);

        setTimeout(()=>heart.remove(),12000);

    },600);

}

// ======================================
// PETALS
// ======================================

function floatingPetals(){

    setInterval(()=>{

        const petal=document.createElement("div");

        petal.className="petal";

        petal.innerHTML="🌸";

        petal.style.left=Math.random()*100+"vw";

        petal.style.fontSize=(18+Math.random()*18)+"px";

        petal.style.animationDuration=(7+Math.random()*5)+"s";

        document.getElementById("floating-petals").appendChild(petal);

        setTimeout(()=>petal.remove(),14000);

    },700);

}

// ======================================
// HEART CURSOR
// ======================================

document.addEventListener("mousemove",(e)=>{

    const heart=document.createElement("div");

    heart.className="cursorHeart";

    heart.innerHTML="💖";

    heart.style.left=e.clientX+"px";
    heart.style.top=e.clientY+"px";

    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),800);

});

// ======================================
// YES BUTTON
// ======================================

yesBtn.addEventListener("click",()=>{

    celebration.style.display="flex";

    launchFireworks();

    heartRain();

});

// ======================================
// FIREWORKS
// ======================================

function launchFireworks(){

    const duration=5000;
    const end=Date.now()+duration;

    (function frame(){

        confetti({
            particleCount:6,
            spread:80,
            origin:{x:0}
        });

        confetti({
            particleCount:6,
            spread:80,
            origin:{x:1}
        });

        confetti({
            particleCount:12,
            spread:360,
            origin:{
                x:Math.random(),
                y:Math.random()*0.6
            }
        });

        if(Date.now()<end){

            requestAnimationFrame(frame);

        }

    })();

}

// ======================================
// HEART RAIN
// ======================================

function heartRain(){

    for(let i=0;i<180;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(18+Math.random()*24)+"px";

        heart.style.animationDuration=(3+Math.random()*3)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),7000);

    }

}
