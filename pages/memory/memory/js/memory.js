//--- GAME SET UP ---//
// define an aray of cards
var cards = [	"card-1",
							"card-2",
							"card-3",
							"card-4",
							"card-5",
							"card-6",
							"card-7",
							"card-8",
							"card-9",
							"card-10",
							"card-11",
							"card-12"];

// copy card array, and make temp array to modify
var temp_cards = cards.slice(0);

// create a new array of cards, this will hold the cards we play with
var game_cards = [];

// set the number of pairs (1/2 amount of playing cards)
var paired_cards = 6;

// create an array of matches, this will hold the paired cards
var matched_cards = [];

// loop through 'temp_cards' and randomly push the pairs into 'game_cards'

// RANDOMIZE FUNCTIONS //
// get random number in range 0 to range -1
function random(range) {
		return Math.floor(Math.random() * range);
}

// returns a random 0 or 1, true or false
function randomize() {
	return random(3) - 1;
}

// loop through 'temp_cards' and randomly push the pairs into 'game_cards'
for (var i = 0; i < paired_cards; i++) {
	var r = random(temp_cards.length);
	var card = temp_cards.splice(r, 1);
	game_cards = game_cards.concat(card);
	game_cards = game_cards.concat(card);
}

// randomize the game cards
game_cards.sort(randomize);

// get the images from giphy
var giphy_images = new Array();

// assign a class to the back of each card which corresponds with 'game_cards'
$(".back").each(function(i) {
	$(this).addClass(game_cards[i]);
	$(this).parent().attr("data-name", game_cards[i]);
});

console.log("GOTTA MATCH 'EM ALL! GOTTA MATCH 'EM ALL!")
// console.log("All Cards: " + cards);
// console.log("Temp Cards: " + temp_cards);
// console.log("Game Cards: " + game_cards);

//--- Stephen Bae helped out with my code during Office Hours ---//
// $(".box").click(function() {
// 		$(this).addClass("flip");
//
// 		if (!$(this).hasClass('matched')) {
// 				$(this).addClass("selected");
//
// 				selected_cards.push($(this));
//
// 				if (selected_cards.length >= 2 && selected_cards[0].index() === selected_cards[1].index()) {
// 						selected_cards.pop();
// 				}
// 		}
//
// 		if (selected_cards.length >= 2) {
// 				if (selected_cards[0].data('name') === selected_cards[1].data('name')) {
// 						$.each(selected_cards, function(index, item) {
// 								item.addClass('matched');
// 								item.removeClass('selected');
// 								matched_cards.push($(this));
// 						});
// 				} else {
// 						$.each(selected_cards, function(index, card) {
// 								if (!card.hasClass('matched')) {
// 										setTimeout(function() {
// 												card.removeClass('flip');
// 										}, 500);
// 								}
//
// 								card.removeClass('selected');
// 						});
// 				}
//
// 				selected_cards = [];
// 		}
// });

//--- GAME LOGIC ---//
var firstPick;
var secondPick;

$(".box").click(function() {
	// if the card is flipped or already matched, do not flip card
	if ($(this).hasClass("flip") || $(this).hasClass("matched")) {
		return;
	}
	//if card is not flipped, flip it
	$(this).addClass("flip");
	//if the first pick is undefined, make it equal to what was clicked
	if (firstPick === undefined) {
			firstPick = $(this);
	// if the second pick is undefined, make it equal to what was clicked
	} else {
		secondPick = $(this);
		// if the 'data-name' of the two picks match, add the class 'matched'
		if (firstPick.attr("data-name") === secondPick.attr("data-name")) {
			console.log("It's super effective!");
			firstPick.addClass("matched")
			secondPick.addClass("matched")
			// add the two cards into the 'matched_cards' array
			matched_cards.push($(firstPick));
			matched_cards.push($(secondPick));
			// check to see if you've matched all the cards
			winGame();
			// if the picks don't match, flip the cards back over
		} else {
			console.log("It's not very effective..");
			// delay the flip back to it's front state
			var x = firstPick;
			var y = secondPick;
			setTimeout(function(){
				x.removeClass("flip");
				y.removeClass("flip");
			}, 1000);
		}
		// clear the first and second pick, set equal to 'undefined'
		firstPick = undefined;
		secondPick = undefined;
	}
});

//--- WINNING THE GAME ---//
function winGame() {
	if (matched_cards.length === game_cards.length) {
		console.log("YOU MATCHED 'EM ALL!")
	}
}

//--- GIPHY API ---//
var xhr = $.get("http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC&tag=cats");
xhr.done(function(data) { console.log("Success, got GIPHY data", data); });
