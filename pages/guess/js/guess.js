var theNumber = Math.floor(Math.random()*100+1);
var numGuesses = 0;

function checkguess() {
	var guess = document.getElementById('guess');
	var output = document.getElementById('output');
	var myNumber = guess.value;

	numGuesses++;

	if (myNumber < theNumber) {
		output.value = "Hmm, that number is too low.. Try again!";
	}
	else if (myNumber > theNumber) {
		output.value = "Hmm, that number is too high.. Try again!";
	}
	else if (myNumber == theNumber) {
		output.value = "You got the correct number in " + numGuesses + " guesses!";
		alert("You guessed the number " + theNumber + " in " + numGuesses + " guesses! Congrats, you win! Click 'OK' to play again...");
		theNumber = Math.floor(Math.random()*100+1);
	}
}

/*
Questions for final:
1) How do I split up my final into multiple pages? (one for each mini-game)
	- Home page with thumbnails for each game
	- Separate page for each game
2) I know we covered this in the last class, but I think I'll need help setting my site up with Firebase again..
3) What is the best way to setup Firebase on a website with multiple pages?
4)

Next steps:
	Guessing game
	• Keep track of the amount of attempts it takes to guess theNumber
	• Create a log of numGuesses for the leaderboard
	• Store results on Firebase

	Memory Game
	• Start the Memory game
	• Find images to match
	• Keep track of the amount of turns it takes to match each tile
	• Create a log of turns needed to finish the game on the leaderboard
	• Store results on Firebase

	Sprite animation
	• Start the Sprite animation demo
	• Illustrate the sprite

*/
