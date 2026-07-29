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
