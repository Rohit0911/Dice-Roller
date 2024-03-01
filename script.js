const buttonel = document.getElementById("roll-button");
const diceel = document.getElementById("dice");
const rh =document.getElementById("roll-history")
const historyl=[];


function rollDice(){
    const rollres=Math.floor(Math.random()*6)+1;
    const diceface=getDice(rollres)
    diceel.innerHTML=diceface
    historyl.push(rollres)
    updateRoll();

}
function updateRoll(){
    rh.innerHTML="";
    for(let i=0;i<historyl.length;i++){
        const listi=document.createElement("li")
        listi.innerHTML=`Roll ${i+1}: <span>${getDice(historyl[i])}</span>`
        rh.appendChild(listi)
    }

}
function getDice(rollres){

    switch(rollres){
        case 1:return "&#9856";
        case 2:return "&#9857";
        case 3:return "&#9858";
        case 4:return "&#9859";
        case 5:return "&#9860";
        case 6:return "&#9861";
        default:return "";
        
    }

}


buttonel.addEventListener("click", () => {
  diceel.classList.add("roll-animation");

  setTimeout(() => {
    diceel.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
