function getComputerChoice(){
    let rand=parseInt(Math.floor(Math.random()*(4-1)+1));
    switch(rand){
        case 1:return 1;
        break;        
        case 2:return 2;
        break;
        case 3:return 3;
        break;
    }
    
}
let p=1;
let Pscore=0;
let Cscore=0;

let domButton1=document.getElementById('rock');

let domButton2=document.getElementById('paper');

let domButton3=document.getElementById('scissors');



domButton1.addEventListener('click',function(){
    p=1;
});
domButton1.addEventListener('click',play);

domButton2.addEventListener('click',function(){
    p=2;
});
domButton2.addEventListener('click',play);

domButton3.addEventListener('click',function(){
    p=3;
});
domButton3.addEventListener('click',play);

let result=document.getElementById("result");
let details=document.getElementById('det');




function play(player,computer1){
        
        console.log("playing...")

        
        player=document.getElementsByClassName('div').value;
        
        
        
        computer1=getComputerChoice();
        
        
        if(p==computer1){
            details.textContent="It is a Tie.";
            result.textContent="Results: "+Pscore+" : "+Cscore;
        }
        else if(p==1 && computer1==2){
            details.textContent="You lose.Paper covers Rock!";
            Cscore++;
            result.textContent="Results: "+Pscore+" : "+Cscore;
        }
        else if(p==1 && computer1==3){
            details.textContent= "You win.Rock smashes Scissors!";
            Pscore++;
            result.textContent="Results: "+Pscore+" : "+Cscore;
        }
        else if(p==2 && computer1==1){
            details.textContent= "You win.Paper covers Rock!";
            Pscore++;
            result.textContent="Results: "+Pscore+" : "+Cscore;
        }
        else if(p==2 && computer1==3){
            details.textContent= "You lose.Scissors cuts Paper!";
            Cscore++;
            result.textContent="Results: "+Pscore+" : "+Cscore;
        }
        else if(p==3 && computer1==1){
            details.textContent= "You lose.Rock smashes Scissors!";
            Cscore++;
            result.textContent="Results: "+Pscore+" : "+Cscore;
        }
        else if(p==3 && computer1==2){
            details.textContent= "You win.Scissors cuts Paper!";
            Pscore++;
            result.textContent="Results: "+Pscore+" : "+Cscore;
        }
        if(Cscore>=5){
            details.textContent= "Computer wins";
            Cscore=0;
            Pscore=0;
        }
        if(Pscore>=5){
            details.textContent= "You win!";
            Cscore=0;
            Pscore=0;

        }
} 