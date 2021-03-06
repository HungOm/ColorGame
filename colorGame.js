
var numSquares = 6;
var colors =[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 =document.querySelector('h1');
var resetButton = document.querySelector("#reset");
var modeButtons =document.querySelectorAll(".mode");



init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for (var i = 0; i< modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add('selected');
			this.textContent ==="Easy"? numSquares =3: numSquares =6;
			reset();

		});
}

}

function setupSquares(){
	for (var i = 0; i<squares.length; i++) {
		squares[i].addEventListener("click", function(){

			 //grab color of picked clicked square
			 var clickedColor = this.style.backgroundColor ;
			 // console.log(clickedColor, pickedColor) //

			 if(clickedColor === pickedColor) {
			 	// alert("correct");
				messageDisplay.textContent="Correct!";
				resetButton.textContent ="Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				// alert("wrong")
				this.style.backgroundColor= "#232323";
				messageDisplay.textContent = "Try  again!";
			}
		});
	}

}
function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked ColorGame
	colorDisplay.textContent = pickedColor;
	//change color of squres
	resetButton.textContent = "New Colors"
	messageDisplay.textContent ="";

	for (var i =0; i < squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	if (colors[i]){
		squares[i].style.display ="block";
		squares[i].style.backgroundColor =colors[i];
	}else{
		squares[i].style.display ="none";
	}
}
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();

})



// colorDisplay.textContent = pickedColor;



function changeColors(color){
	//loop through all square

	for ( var i =0 ; i < squares.length; i++){
		squares[i].style.backgroundColor=color;
	}
}


function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];

}
function generateRandomColors(num){
	// make an array
var arr =[]
	// add num random colors to array

	for ( var i = 0; i < num; i++){
		// get random colors and push it into array
		arr.push(randomColor())

	}

	// return that array
	return arr;
}



function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random()*256)
	// pick a green from 0 - 255
	var g = Math.floor(Math.random()*256)

	//pick a blue from 0 -255
	var b = Math.floor(Math.random()*256)

	return "rgb("+ r + ", " + g + ", " + b +")";
}
