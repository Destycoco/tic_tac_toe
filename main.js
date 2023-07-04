const board = document.querySelector(".board");
const cellElement = document.querySelectorAll("[data-cell]")
const X_class = "x";
const O_class = "o";
const winningCombinations = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[2,4,6],
	[0,4,8]
]
let circleTurn;

cellElement.forEach((cell)=>{
	cell.addEventListener("click", handleClick, {once: true});
})

function handleClick(e){
	const cell = e.target
	const currentTurn = circleTurn ? O_class : X_class;
	
	placeMarker(cell, currentTurn);
	swapturn(); 
	setBoardHover();

	if (checkWin(currentTurn)){
		console.log("winner");
	};
	
		
	}
	

function swapturn(){
	circleTurn = !circleTurn;
}
function placeMarker(box, classfill){
	box.classList.add(classfill);
}
function setBoardHover(){
	board.classList.remove(O_class);
	board.classList.remove(X_class);
	if (circleTurn){
		board.classList.add(O_class)
	} else {
		board.classList.add(X_class);
	}
}

function checkWin(currentTurn){
	return winningCombinations.some((combination)=>{
		return combination.every((index)=>{
			return cellElement[index].classList.contains(currentTurn);
		})
	})
}

