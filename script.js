//pseudocode for getComputerChoice:
//input: nothing;
//output: rock; paper; scissors

//math.random() returns 0<=x<1;
//so maximum value (3) * math.random() will give us value 0~2.999999. need to floor it.
//if  0 -> return rock; if 1 -> return paper; if 2-> return scissors;



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
    let userChoice = prompt("Rock - 0 ; Scissors - 1 ; Paper - 2");
    if(!(userChoice==0 || userChoice==1 || userChoice==2))
    {
        console.log("Invalid Input");
    }
    else
    {
        switch(userChoice){
            case 0:
                return "rock";
            case 1:
                return "scissors";
            case 2:
                return "paper";
            default:
                return "rock";
        }
    }
    return;
}

console.log(getHumanChoice());