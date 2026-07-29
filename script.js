// =====================================
// Elements
// =====================================

const welcome = document.getElementById("welcome");
const beginBtn = document.getElementById("beginBtn");
const main = document.getElementById("main");

const letter = document.getElementById("letter");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Hide proposal until letter finishes
document.querySelector(".proposal").style.display = "none";

// =====================================
// Begin Button
// =====================================

beginBtn.addEventListener("click", () => {

    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";

        main.style.display = "flex";

        typeLetter();

        startHearts();

        startPetals();

    }, 700);

});

// =====================================
// Typewriter Letter
// =====================================

const message = `From the moment we started talking,

I never imagined someone could become this special to me.

Every smile,
every laugh,
and every little memory we've shared
has become something I truly cherish.

Thank you for being such an amazing person.

No matter where life takes us,
I hope we keep making beautiful memories together.

So today...

there's just one question I'd love to ask... ❤️`;

let i = 0;

function typeLetter(){

    if(i < message.length){

        letter.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeLetter,30);

    }else{

        document.querySelector(".proposal").style.display="block";

    }

}

// =====================================
// Floating Hearts
// =====================================

function startHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.bottom="-40px";

        heart.style.fontSize=(18+Math.random()*18)+"px";

        heart.style.animation="floatHeart 8s linear forwards";

        heart.style.pointerEvents="none";

        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),8000);

    },500);

}

// =====================================
// Cherry Blossoms
// =====================================

function startPetals(){

    setInterval(()=>{

        const petal=document.createElement("div");

        petal.innerHTML="🌸";

        petal.style.position="fixed";

        petal.style.left=Math.random()*100+"vw";

        petal.style.top="-40px";

        petal.style.fontSize=(18+Math.random()*15)+"px";

        petal.style.animation="petalFall 9s linear forwards";

        petal.style.pointerEvents="none";

        document.body.appendChild(petal);

        setTimeout(()=>petal.remove(),9000);

    },600);

}

// =====================================
// NO Button Runs Away
// =====================================

let yesScale=1;

function moveNo(){

    const x=Math.random()*(window.innerWidth-170);

    const y=Math.random()*(window.innerHeight-80);

    noBtn.style.position="fixed";

    noBtn.style.left=x+"px";

    noBtn.style.top=y+"px";

    yesScale+=0.08;

    yesBtn.style.transform=`scale(${yesScale})`;

}

noBtn.addEventListener("mouseenter",moveNo);

noBtn.addEventListener("click",moveNo);

// =====================================
// YES Button
// =====================================

yesBtn.addEventListener("click",()=>{

    celebrate();

    setTimeout(()=>{

        window.location.href="yes.html";

    },2500);

});

// =====================================
// Fireworks
// =====================================

function celebrate(){

    const end=Date.now()+2500;

    (function frame(){

        confetti({

            particleCount:10,

            spread:80,

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
