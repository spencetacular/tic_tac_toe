//var playerOneName = prompt('What is your Name Player 1?');
//var playerTwoName = prompt('What is your Name Player 2?');
function player(name, letter){
	this.name = name;
	this.letter = letter;
	this.wins = 0;
}

player1 = new player('Bill', 'X');
player2 = new player('Ted', 'O');

player1.name = prompt('What is your Name Player 1?');
player2.name = prompt('What is your Name Player 2');


 function setPlayerNames(){

	 	document.getElementById('player_one_name').innerHTML = player1.name +
	 	' is: ' +player1.letter;
	 	document.getElementById('player_one_wins').innerHTML = 'Wins: ' + player1.wins;

	 	document.getElementById('player_two_name').innerHTML = player2.name +
	 	' is: ' +player2.letter;
	 	document.getElementById('player_two_wins').innerHTML = 'Wins: ' + player2.wins;
		
 }

setPlayerNames();

var clickTicker = 0;

function checkForStalemate(ticker){
	if (ticker >= 9) {
		alert("Cats!");
	};
}

function checkForWin(){
	if (boxes[0].clicked == true && boxes[0].letter == boxes[1].letter && boxes[0].letter == boxes[2].letter ) {
		resetGame();
	};
	if (boxes[3].clicked == true && boxes[3].letter == boxes[4].letter && boxes[3].letter == boxes[5].letter ) {
		resetGame();
	};
	if (boxes[6].clicked == true && boxes[6].letter == boxes[7].letter && boxes[6].letter == boxes[8].letter ) {
		resetGame();
	};
	if (boxes[0].clicked == true && boxes[0].letter == boxes[3].letter && boxes[0].letter == boxes[6].letter ) {
		resetGame();
	};
	if (boxes[1].clicked == true && boxes[1].letter == boxes[4].letter && boxes[1].letter == boxes[7].letter ) {
		resetGame();
	};
	if (boxes[2].clicked == true && boxes[2].letter == boxes[5].letter && boxes[2].letter == boxes[8].letter ) {
		resetGame();
	};
	if (boxes[0].clicked == true && boxes[0].letter == boxes[4].letter && boxes[0].letter == boxes[8].letter ) {
		resetGame();
	};
	if (boxes[6].clicked == true && boxes[6].letter == boxes[4].letter && boxes[6].letter == boxes[2].letter ) {
		resetGame();
	};
}

function resetGame(){
	currentPlayer.wins ++;
	clickTicker = 0;

	alert(currentPlayer.name + ' Wins! Total Wins:' + currentPlayer.wins);
	currentPlayer = player2;
	setPlayerNames();
	
	for(var i = 0; i < boxes.length; i++){
		boxes[i].clicked = 0;
		boxes[i].letter = '';
		boxes[i].innerHTML = '';
	}
}


var boxes = document.getElementsByClassName('tic-tac-toe-box');
console.log(boxes);

var currentPlayer = player1;

function switchPlayer(){
	if (currentPlayer.name == player1.name) {
		currentPlayer = player2;
	}else{
		currentPlayer = player1
	};

}

for(var i = 0; i < boxes.length; i++) {
  //var box = boxes[i];
  boxes[i].clicked = false;
  //box.letter = "";
  boxes[i].letter = "";
  boxes[i].addEventListener('click', function() {

  	if (this.clicked == false) {
  		this.letter = currentPlayer.letter;
  	
  		this.innerHTML = this.letter;
    	this.clicked = true;
    
    	checkForWin();
    	clickTicker ++;
    	checkForStalemate(clickTicker);
    	switchPlayer();
  	};
    
  });
}






