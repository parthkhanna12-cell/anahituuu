// ===============================
// Welcome Screen
// ===============================

const beginBtn = document.getElementById("beginBtn");
const welcome = document.getElementById("welcome");
const mainContent = document.getElementById("mainContent");

beginBtn.onclick = () => {

    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";

        mainContent.style.display = "flex";

        startTyping();

        createPetals();

        createHearts();

    },800);

};


// ===============================
// Typewriter
// ===============================

const letter = `From the very first moment we started talking,
I never imagined someone could become this special to me.

Your smile makes my day brighter,
your laugh makes everything better,
and every memory with you is something I truly treasure.

No matter where life takes us,
I hope I get to create thousands of memories with you.

So today...

I just want to ask one simple question... ❤️`;

const letterBox = document.getElementById("letter");

let index = 0;

function startTyping(){

    function type(){

        if(index < letter.length){

            letterBox.innerHTML += letter.charAt(index);

            index++;

            setTimeout(type,35);

        }

    }

    type();

}


// ===============================
// Floating Hearts
// ===============================

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="floatingHeart";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),10000);

},400);

}


// ===============================
// Cherry Blossoms
// ===============================

function createPetals(){

setInterval(()=>{

const petal=document.createElement("div");

petal.innerHTML="🌸";

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(6+Math.random()*5)+"s";

petal.style.fontSize=(20+Math.random()*15)+"px";

document.body.appendChild(petal);

setTimeout(()=>petal.remove(),12000);

},500);

}


// ===============================
// Heart Cursor
// ===============================

document.addEventListener("mousemove",e=>{

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.className="cursorHeart";

heart.style.left=e.pageX+"px";

heart.style.top=e.pageY+"px";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),900);

});


// ===============================
// YES / NO
// ===============================

const yesBtn=document.getElementById("yesBtn");

const noBtn=document.getElementById("noBtn");

const celebrate=document.getElementById("celebrate");

let grow=1;

function moveNo(){

const x=Math.random()*(window.innerWidth-150);

const y=Math.random()*(window.innerHeight-80);

noBtn.style.position="fixed";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

grow+=0.12;

yesBtn.style.transform=`scale(${grow})`;

}

noBtn.addEventListener("mouseover",moveNo);

noBtn.addEventListener("click",moveNo);


// ===============================
// Celebration
// ===============================

yesBtn.onclick=()=>{

celebrate.style.display="flex";

fireworks();

heartRain();

};


// ===============================
// Fireworks
// ===============================

function fireworks(){

const end=Date.now()+4000;

(function frame(){

confetti({

particleCount:8,

spread:90,

origin:{x:0}

});

confetti({

particleCount:8,

spread:90,

origin:{x:1}

});

confetti({

particleCount:12,

spread:360

});

if(Date.now()<end){

requestAnimationFrame(frame);

}

})();

}


// ===============================
// Heart Rain
// ===============================

function heartRain(){

for(let i=0;i<140;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="heartRain";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.animationDuration=(3+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),7000);

}

}
