    // Directions!
    document.getElementById("directions").innerHTML = "Guess what letter I'm thinking of... type any letter from a-z! You get 9 guesses!";

    // variables start off at 0 wins and losses and 9 tries
    var wins = 0;
    var losses = 0;
    var tries = 8;

    // Computer picks from this array of letters
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l' , 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var randomComputerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    var arrGuesses = []; // an array of the guesses so far...
    
     document.onkeyup=function(event) {     // when user types a key... 
        var userChoice = event.key.toLowerCase(); // user input is saved as var userChoice
        arrGuesses.push(userChoice); // adds the user's letter into the array

        // Stats display
        document.getElementById("guessesText").innerHTML = "Tries remaining: " + tries;
        document.getElementById("winsText").innerHTML = "Wins: " + wins;
        document.getElementById("lossText").innerHTML = "Losses: " + losses;
        document.getElementById("yourGuesses").innerHTML = "Your guesses: " + arrGuesses;

        // run through the game
            if (tries === 1)
            {
                losses += 1; // add a loss once the condition is met (tries are at 0)             
                tries = 9; // once tries hits zero, reset tries back to 9.
                arrGuesses = []; // reset the array of guesses           
            }
            else if (randomComputerChoice !== userChoice)
            {                         
                tries -=1; // decrease number of attempts every incorrect guess
                numGuesses++; // count number of guesses
                arrGuesses = []; // reset the array of guesses
            }
            else {
                 wins++; // add a W.
                 tries = 9; // once tries hits zero, reset tries back to 9.
                 arrGuesses = []; // reset the array of guesses          
            }

    }

