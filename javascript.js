function getComputerChoice(){
     const no = Math.floor(Math.random()*100);  
    let choice;
    if(no<33){  
        choice = "rock";
    }
    else if(no<66){
        choice = "paper";
    }
    else{
        choice = "scissors";
    }
    return choice;
    
}


let computerScore = 0;
let playerScore = 0;
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const game = document.querySelector("#game")
const result = document.querySelector("#result")
const Cscore = document.querySelector("#Cscore")
const Pscore = document.querySelector("#Pscore")
function playRound(humanSelection, computerSelection){
    let msg;
    let outcome;
    if (humanSelection=="rock"){ 
        if (computerSelection == "rock"){
            msg = "It's a tie";
            outcome="tie"
        }
        else if (computerSelection =="paper"){
            msg="The computer gets a point";
            computerScore+=1
        }
        else if(computerSelection=="scissors"){
            msg = "You score a point";
            playerScore+=1
        }
        result.textContent=msg;
        
    }
    if (humanSelection=="paper"){
        if(computerSelection=="rock"){
            msg ="You score a point"
            playerScore+=1
        }
        else if(computerSelection=="paper"){
            msg = "It's a tie"
            outcome="tie"
        }
        else if(computerSelection=="scissors"){
            msg ="The computer scores a point"
            computerScore+=1
        }
        result.textContent=msg
    }
    if(humanSelection=="scissors"){
        if (computerSelection=="rock"){
            msg = "The computer scores a point"
            computerScore+=1
        }
        else if(computerSelection=="paper"){
            msg = "You score a point"
            playerScore+=1
        }
        else if(computerSelection=="scissors"){
            msg = "It's a tie"
            outcome="tie"
        }
        result.textContent = msg
    }
    Cscore.textContent = `Computer score is : ${computerScore}`;
    Pscore.textContent = `Player score is : ${playerScore}`;
}

game.addEventListener("click", function(){


    
rock.addEventListener("click", function(){
    playRound("rock", getComputerChoice());
    resetgame();
});

paper.addEventListener("click", function(){
    playRound("paper", getComputerChoice());
    resetgame();
});

scissors.addEventListener("click", function(){
     playRound("scissors", getComputerChoice());
     resetgame();
});
        
});

function resetgame(){
    if(computerScore==4){
        result.textContent = "The computer wins the game"
        playerScore=0;
        computerScore=0;
        
    }
    else if(playerScore==4){
        result.textContent = "The player wins the game"
        playerScore=0;
        computerScore=0;
        
    }
    
}


