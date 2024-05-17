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


function getHumanChoice(){
    let choice = prompt("rock/paper/scissors");
    return choice;
};

function playRound(){
    let msg;
    let outcome;
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();    
    if (humanSelection === "rock"){ 
        if (computerSelection == "rock"){
            msg = "It's a tie";
            outcome="tie"
        }
        else if (computerSelection =="paper"){
            msg="The computer gets a point";
            outcome="comp"
        }
        else if(computerSelection=="scissors"){
            msg = "You score a point";
            outcome ="player"
        }
        
    }
    if (humanSelection=="paper"){
        if(computerSelection=="rock"){
            msg ="You score a point"
            outcome ="player"
        }
        else if(computerSelection=="paper"){
            msg = "It's a tie"
            outcome="tie"
        }
        else if(computerSelection=="scissors"){
            msg ="The computer scores a point"
            outcome="comp"
        }
    }
    if(humanSelection=="scissors"){
        if (computerSelection=="rock"){
            msg = "The computer scores a point"
            outcome="comp"
        }
        else if(computerSelection=="paper"){
            msg = "You score a point"
            outcome ="player"
        }
        else if(computerSelection=="scissors"){
            msg = "It's a tie"
            outcome="tie"
        }
    else{
        msg = "Please enter a valid option";
    }

    }
    alert(msg);
    return outcome;
}

function playGame(){
    let computerScore = 0;
    let playerScore = 0;
    for( let i =1;i<6; i++){
        let result =playRound();
        if (result=="player"){
            playerScore+=1

        }
        else if(result=="comp"){
            computerScore+=1
        }
       console.log("Player score is "+playerScore)
       console.log("Computer score is "+computerScore)
        
    }
    if(playerScore>computerScore){
        console.log("You win the game!1")
    }
    else if(computerScore>playerScore){
        console.log("The computer wins :(")
    }

}
playGame();