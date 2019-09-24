 // Directions!
 document.getElementById("directions").innerHTML = "Guess what letter I'm thinking of... type any letter from a-z!";

 document.onkeyup=function(event) {
        // more variables to store wins, ties, losses
        var wins = 0;
        var ties = 0;
        var losses = 0;
        // array of all letters
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l' , 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        // Random letter
        var randomComputerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        document.write(randomComputerChoice);

        if(randomComputerChoice == this.onkeyup)
        {
            document.write("You win!")
        }
        else {
            document.write("You lose!");
        }
 }

