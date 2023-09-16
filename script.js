var timer = 60;
var score = 0;
var rdn;

function scoreincrement(){
    score += 10;
    document.querySelector("#score").textContent = score;
};

function bubblemaker(){
 cluster = "";
 for (let i = 1; i < 153; i++){
    let num = Math.floor(Math.random()*10);
    cluster += `<div id="bubbles" class="bubble color-white cursor-pointer">${num}</div>`;
 }

 document.querySelector(".gamebody").innerHTML = cluster;
};

function timerchange(){
    let setInter = setInterval(()=>{
        if(timer > 0){
            timer --;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(setInter);
            document.querySelector(".gamebody").innerHTML = 
            `<div class="flex flex-column justify-center align-center"> <h1>Game Over</h1> 
             <h1>score: ${score}</h1> 
             <button class = "btn f-bold cursor-pointer" onclick="window.location.reload();">Start Over</button><div>`;
        }
    },1000); 
};

function hitchange(){
    rdn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = rdn;
};

function hitmatch(){
    document.querySelector(".gamebody").addEventListener("click",(element)=>{
        let hitval = Number(element.target.textContent);
        if(hitval === rdn ){
            scoreincrement();
            bubblemaker();
            hitchange();
        }
        else{
            element.target.classList.add("color-red");
            setTimeout(()=>{
                element.target.classList.remove("color-red");
            },200)
        }
    })
};


bubblemaker();
timerchange();
hitchange();
hitmatch();