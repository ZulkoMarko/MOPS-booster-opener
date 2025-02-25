let pack=document.getElementById("booster");
   


function randomNumber(min,max){
    

    return Math.ceil(Math.random()*(max-min)+min);}

function openPack(){

let cardsOpened=document.getElementById("booster2");
while(cardsOpened.firstChild){cardsOpened.firstChild.remove()};

    for(let i=0;i<3;i++)
    {let cardDiv=document.createElement("div");
        cardDiv.classList.add("mops-card");
        let cardImg=document.createElement("img");
        cardImg.id=i;

        let num=1;
        if(i==3)
        {num= randomNumber(30, 67)}
        else{num=randomNumber(1,67)};

        cardImg.src="\kartt/"+num.toString()+".jpg";

    cardDiv.appendChild(cardImg);
    document.querySelector("#booster2").appendChild(cardDiv);
    }
}



 pack.addEventListener("click",openPack);