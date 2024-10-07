let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userpara = document.querySelector(".user-score");
let comppara = document.querySelector(".comp-score");


const gencompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    var randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userturn, userChoice, comChoice) => {
    if(userturn){
        userScore++;
        userpara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        comppara.innerText = compScore;
        msg.innerText = `You lost. ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    
    const comChoice = gencompChoice();
    if(userChoice === comChoice){
        drawGame();
    }
    else{
        let userturn = true;
        if(userChoice === "rock"){
            //paper, scissor
            userturn = comChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissor
            userturn = comChoice === "rock" ? true : false;
        }
        else{
            //rock, paper
            userturn = comChoice === "rock" ? false : true;
        }
        showWinner(userturn, userChoice, comChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});