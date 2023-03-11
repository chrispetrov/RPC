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
        
        console.log(computer1);

        let p=1
        switch(player.toLowerCase()){
            case "rock": p=1
            break;
            case "paper": p=2
            break;
            case "scissors": p=3
            break;
        }
        console.log(p);
        if(p==computer1){
            return "It's a Tie."
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
computer=getComputerChoice();

console.log(play("paper",computer));