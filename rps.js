//Based on the RPS game found in Code Acadmey - JavaScript

function myGame(){
    //receive input from user
    var userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
    alert("You have chosen" + " " + userChoice + "!");
    
//generate computer choice
var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice < 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    //comparing choices
var compare = function (choice1, choice2)  
{
    if (choice1 === choice2)
        { return "The result is a tie!"; }
        
        if (choice1 === "rock") 
        { if (choice2 === "scissors") //if false then else
            { return "Computer chooses scissors. Rock is triumphant!!"; }
        else 
            { return "Computer chooses paper. Paper is king!!"; }
        }
         if (choice1 === "paper")
        { if (choice2 === "rock")  //if false then else
            { return "Computer chooses rock.  Paper is king!!"; }
        else 
            { return "Computer chooses scissors. Scissors cuts the mustard!!"; }
        }
         if (choice1 === "paper")
        { if (choice2 === "scissors") //if false then else
            { return "Computer chooses scissors. Scissors cuts the mustard!!"; }
        else 
            { return "Computer chooses rock. Paper is king!!"; }
        }
         if (choice1 === "scissors")
        { if (choice2 === "rock")  //if false  then else
            { return "Computer chooses rock. Rock is triumphant!!"; }
        else 
            { return "Computer chooses paper. Scissors cuts the mustard!!"; }
        }
         if (choice1 === "scissors")
        { if (choice2 === "paper") //if false then else
            { return "Computer chooses paper. Scissors cuts the mustard!!"; }
        else 
            { return "Computer chooses rock. Rock is triumphant!!"; }
        }
        if (choice1 !== "rock" || "paper" || "scissors") {
            alert("This is an invalid entry")}
};
//print of somputer and user choice
alert(compare(userChoice,computerChoice));

};