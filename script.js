let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user_score = document.querySelector("#user-score");
const  comp_score = document.querySelector("#comp-score");

const genCompChoice = () =>{
    let options = ["stone", "paper", "scissors"];
    //random function to get random value from array
    let randomIdx  = Math.floor(Math.random()*3);  //random variable generate val betn 0-1 so to range it 0-2 we multiply it by 3
    //floor remove all decimal places
    return options[randomIdx];
}

const drawGame = () =>{
    msg.innerText= "Draw! Try again";
    msg.style.backgroundColor = "#0081a7";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        user_score.innerText = userScore;
        msg.innerText =`Congratulations! You win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        comp_score.innerText = compScore;
        msg.innerText= `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    //generate random computer choice
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);
    if(userChoice === compChoice){
        //draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "stone"){
            userWin = (compChoice === "paper")? false : true ;  
        }
        else if(userChoice === "paper"){
            userWin = (compChoice === "scissors")? false : true ; 
        }
        else{
            userWin = (compChoice === "stone")? false : true ; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});