    // Directions!
    document.getElementById("directions").innerHTML = "Guess what letter I'm thinking of... type any letter from a-z! You get 9 guesses!";

    // variables start off at 0 wins and losses
    var wins = 0;
    var losses = 0;
    var tries = 9;

    // Computer picks from this array of letters
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l' , 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var randomComputerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    // when user types a key...
     document.onkeyup=function(event) {      
        var userChoice = event.key; // user input is saved as var userChoice
          
        // run through the game
        // for (var numGuesses = 5; numGuesses >= 0; numGuesses--) {
            if (randomComputerChoice != userChoice)
            {
                document.getElementById("guessesText").innerHTML = "Tries remaining: " + tries;
                tries -=1;
                numGuesses++; // count number of guesses
            }
            else {
                 
                // document.getElementById("lossText").innerHTML = "You lose!";
                document.getElementById("winText").innerHTML = "You win!";
                document.write("epic");
            }
     // }

    }

