//nested if else

let winning_number =19;

let userGuess= +prompt("guess a number");

if (userGuess===winning_number){
    console.log("your guess is right");
}
else{
    if(userGuess<winning_number){
        console.log("too low");
    }

    else{
        console.log("too high");
    }
}