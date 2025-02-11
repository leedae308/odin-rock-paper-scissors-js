//pseudocode for getComputerChoice:
//input: nothing;
//output: rock; paper; scissors

//math.random() returns 0<=x<1;
//so maximum value (3) * math.random() will give us value 0~2.999999. need to floor it.
//if  0 -> return rock; if 1 -> return paper; if 2-> return scissors;

//declaring the players score variables
let humanScore = 0;
let computerScore = 0;


function getComputerChoice()
{
    let value = Math.floor(3* Math.random());

    switch(value){
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
        default:
            return "rock";
    }
    
    return;
}

//pseudocode for getHumanChoice:
//input: nothing;
//output: user input choice (rock, scissors, paper);

//use prompt: Rock - 0; Scissors -1; Paper -2;
//if input != one of those three, return invalid input.



function getHumanChoice()
{
    const userChoice = prompt("Rock - 0 ; Scissors - 1 ; Paper - 2");
    if(!(userChoice==0 || userChoice==1 || userChoice==2))
    {
        console.log("Invalid Input");
        return;
    }

    // console.log(userChoice);

    switch(parseInt(userChoice)){
        case 0: return "rock";
        case 1: return "scissors";
        case 2: return "paper";
    }
}


//playRound function.
//input Param: humanChoice, computerChoice
//if    person      computer
//      rock        paper       Y
//      rock        scissors    You Win! Rock beats Scissors.
//      rock        rock        Tied. Try Again!
//      paper       paper       Tied. Try Again!

function playRound(humanChoice, computerChoice)
{
    if(humanChoice=="rock")
    {
        switch(computerChoice)
        {
            case "rock": return tied();
            case "paper": return lose(humanChoice, computerChoice);
            case "scissors": return win(humanChoice, computerChoice);
        }
    }
    else if(humanChoice=="scissors")
    {
        switch(computerChoice)
        {
            case "scissors": return tied();
            case "rock": return lose(humanChoice, computerChoice);
            case "paper": return win(humanChoice, computerChoice);
        }
    }
    else if (humanChoice=="paper")
    {
        switch(computerChoice)
        {
            case "paper": return tied();
            case "scissors": return lose(humanChoice, computerChoice);
            case "rock": return win(humanChoice, computerChoice);
        }
    }
}


function tied()
{
    return "Tied. Try Again!";
}
function win(humanChoice, computerChoice)
{
    humanScore++;
    return "You Win!" + " " + humanChoice + " beats " +computerChoice+".";
}
function lose(humanChoice, computerChoice)
{
    computerScore++;
    return "You Lose!" + " " + computerChoice + " beats " +humanChoice+".";
}



// playGame function
// input param: none;
// console output: game result / scores.

//for loop to go over the program five times;




function playGame()
{



    for(let i = 0; i<5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
        console.log("Human Score: " + humanScore + "\tComputer Score: "+computerScore+"\n");
    }
}


playGame()