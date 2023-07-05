const cellElements = document.querySelectorAll("[data-cell]");
const cellBoard = document.querySelector(".board");
const winningSection = document.getElementById("winning-section");
const winnerMessage = document.querySelector("[data-winner-message]");
const resetButton = document.getElementById("reset");
const O_class = 'o';
const X_class = 'x';

const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[2, 4, 6],
	[0, 4, 8]
]
const drawArray = [0,1,2,3,4,5,6,7,8];
let circleTurn;
startGame();
function startGame(){
	circleTurn = false;
	cellElements.forEach((cell)=>{
		cell.addEventListener("click", handleClick, {once: true});
		// cell.removeEventListener("click", handleClick);
		cell.classList.remove(X_class);
		cell.classList.remove(O_class);
		winningSection.classList.remove("show");

		setHoverEffect();
	})
}

	function handleClick(e) {
		const cell = e.target;
		const currentTurn = circleTurn ? O_class : X_class;
		placeMark(cell, currentTurn);
		
		if (showWinner(currentTurn)){
			endGame(false);
		} else if (isDraw()){
			endGame(true);
			// console.log("draw");
		} else{
			swapTurn();
			setHoverEffect();
		}
		resetGame();

	}
	function placeMark(cell, currentTurn) {
		cell.classList.add(currentTurn);
	}
	function swapTurn(){
		circleTurn = !circleTurn;
	}
	function setHoverEffect(){
		cellBoard.classList.remove(X_class);
		cellBoard.classList.remove(O_class);
		if (circleTurn){
			cellBoard.classList.add(O_class);
		} else {
			cellBoard.classList.add(X_class);
		}
	}
	function showWinner(currentTurn){
		return winningCombinations.some((combinations)=>{
			return combinations.every((index)=>{
				return cellElements[index].classList.contains(currentTurn);
			})
		})
	}
	function endGame(draw){
		if (draw){
			winnerMessage.innerText = `Draw`
		} else {
			winnerMessage.innerText = `${circleTurn ? "O's" : "X's"} Wins!!!`
		}
		winningSection.classList.add("show");
		}
	function isDraw(){
		 return drawArray.every((index)=>{
			return cellElements[index].classList.contains(X_class) ||
			cellElements[index].classList.contains(O_class);
		 })
	}
	function resetGame(){
		resetButton.addEventListener("click", startGame);

	}
		
		
		
	
	