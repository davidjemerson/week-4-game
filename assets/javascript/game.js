// Track player wins
var winCounter = 0;

// Variable for holding a random target number
var targetNumber = 0;

// Variable for holding crystal values
var crystalValues = [];

// Track player score
var playerScore = 0;

// Crystal Images used for buttons


// Create crystal objects and generate random values

function newGame() {

	function addCrystalValues () {
		crystalValues = [];
		for (i = 1 ; i < 5 ; i++) {
			crystalValues.push(Math.floor(Math.random() * 12) + 1);
		}

		for (i = 1 ; i < 5 ; i++) {
			var crystalButton = $("#crystal"+i);
			crystalButton.attr("data-crystalvalue", crystalValues[i-1]);
		}
	}

	function newRound() {
		addCrystalValues();
		targetNumber = Math.floor(Math.random() * 100) + 19;
		playerScore = 0;
		$("#targetNumber").text(targetNumber);
		$("#wins").text(winCounter);
		$("#currentScore").text(playerScore);
	}

	function addValue() {
		var currentValue = ($(this).attr("data-crystalvalue"));
		currentValue = parseInt(currentValue);
		playerScore += currentValue;
		$("#currentScore").text(playerScore);
			if (playerScore === targetNumber) {
				alert("You Win!");
				winCounter++;
				newRound();
			}

			if (playerScore > targetNumber) {
				alert("You lose. Better luck next time");
				newRound();
			}
	}

	newRound();
	$(".crystal-item").click(addValue);

}

newGame();