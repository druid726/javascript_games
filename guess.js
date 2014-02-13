//Based on David Bau game found on the web

function anotherGame() {
var x = Math.floor(Math.random() * 100) + 1; //computer generated number
var chances = 5; //number of guesses
var challenge = 'Can you guess the number? (1 to 100)';

while (chances > 0) {
    var guess = prompt(challenge + 
        ' You have ' + chances + ' guesses left!');
    if(!guess) break;
    guess = Number(guess);
    if (guess == x) {
            alert("Congratulations. You guessed the number!");
            chances = 0;
        }
            else {
            if (guess > x) alert("Too high, try again.");
            if (guess < x) alert("Too low, try again.");
            chances = chances -1;
            }
       }


alert('The secret number was ' + x + '.');
};