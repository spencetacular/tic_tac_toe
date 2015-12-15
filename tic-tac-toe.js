// var playerOneName = prompt('What is your Name Player 1?');
// var playerTwoName = prompt('What is your Name Player 2?');
function player(name, letter){
	this.name = name;
	this.letter = letter;
}

player1 = new player('Bill', 'X');
player2 = new player('Ted', 'O');

var clickTicker = 0;

function checkForStalemate(ticker){
	if (ticker >= 9) {
		alert("Stalemate!");
	};

}

function checkForWin(){
	if (boxes[0].clicked == true && boxes[0].letter == boxes[1].letter && boxes[0].letter == boxes[2].letter ) {
		alert("Works!");
	};
	if (boxes[3].clicked == true && boxes[3].letter == boxes[4].letter && boxes[3].letter == boxes[5].letter ) {
		alert("Works!");
	};
	if (boxes[6].clicked == true && boxes[6].letter == boxes[7].letter && boxes[6].letter == boxes[8].letter ) {
		alert("Works!");
	};
	if (boxes[0].clicked == true && boxes[0].letter == boxes[3].letter && boxes[0].letter == boxes[6].letter ) {
		alert("Works!");
	};
	if (boxes[1].clicked == true && boxes[1].letter == boxes[4].letter && boxes[1].letter == boxes[7].letter ) {
		alert("Works!");
	};
	if (boxes[2].clicked == true && boxes[2].letter == boxes[5].letter && boxes[2].letter == boxes[8].letter ) {
		alert("Works!");
	};
	if (boxes[0].clicked == true && boxes[0].letter == boxes[4].letter && boxes[0].letter == boxes[8].letter ) {
		alert("Works!");
	};
	if (boxes[6].clicked == true && boxes[6].letter == boxes[4].letter && boxes[6].letter == boxes[2].letter ) {
		alert("Works!");
	};



}

document.getElementById('player_one_name').innerHTML = player1.name;
document.getElementById('player_two_name').innerHTML = player2.name;

// function box(id){
// 	this.id = id;
// 	this.checked = false;
// 	this.x = false;
// 	this.o = false;
// }

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
  		//boxes[i].letter = currentPlayer.letter;
  	
  		this.innerHTML = this.letter;
    	this.clicked = true;
    	console.log(this.clicked);
    	console.log(currentPlayer.name);
    	//console.log(boxes);
    	checkForWin();
    	clickTicker ++;
    	checkForStalemate(clickTicker);
    	console.log(clickTicker);
    	switchPlayer();
  	};
    
  });
}






