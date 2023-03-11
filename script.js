function getComputerChoice(){
    let rand=parseInt(Math.floor(Math.random()*(4-1)+1));
    switch(rand){
        case 1:console.log("C=rock")
        return 1;
        break;        
        case 2:console.log("C=paper");
        return 2;
        break;
        case 3:console.log("C=scissors");
        return 3;
        break;
    }
    
}

function play(player,computer1){
        
        

        let p=1
        switch(player.toLowerCase()){
            case "rock": p=1
            break;
            case "paper": p=2
            break;
            case "scissors": p=3
            break;
        }
        
        if(p==computer1){
            return "It is a Tie."
        }
        else if(p==1 && computer1==2){
            return "You lose.Paper covers Rock!"
        }
        else if(p==1 && computer1==3){
            return "You win.Rock smashes Scissors!"
        }
        else if(p==2 && computer1==1){
            return "You win.Paper covers Rock!"
        }
        else if(p==2 && computer1==3){
            return "You lose.Scissors cuts Paper!"
        }
        else if(p==3 && computer1==1){
            return "You lose.Rock smashes Scissors!"
        }
        else if(p==3 && computer1==2){
            return "You lose.Scissors cuts Paper!"
        }
} 
function game(){
    let Pscore=0;
    let Cscore=0;
    for(let i=0;i<5;i++){
        let string1=play(prompt("Enter you Jajanken"),getComputerChoice());
        console.log(string1.charAt(4));
        if(string1.charAt(4)=="w"){
            Pscore+=1;
        }
        else if(string1.charAt(4)=="l"){
            Cscore+=1;
        }
        else console.log('no points are awarded :(');
    }
    if(Pscore>Cscore) console.log("PLAYER WINS");
    else if(Pscore<Cscore) console.log("Computer wins");
    else console.log("It's a TIE!?");

}

game();