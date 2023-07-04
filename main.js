// const board = document.querySelector(".board");
// const cellElement = document.querySelectorAll("[data-cell]")
// const X_class = "x";
// const O_class = "circle";
// let circleTurn;

// cellElement.forEach((cell)=>{
// 	cell.addEventListener("click", handleClick, {once: true});
// })

// function handleClick(e){
// 	const cell = e.target
// 	const turn = circleTurn ? O_class : X_class;
	
// 	placeMarker(cell, turn);
// 	swapturn(); 
// 	// setBoardHover();
	

// }
// function swapturn(){
// 	circleTurn = !circleTurn;
// }
// function placeMarker(box, classfill){
// 	box.classList.add(classfill);
// }
// // function setBoardHover(){
// // 	board.classList.remove(O_class);
// // 	board.classList.remove(X_class);
// // 	if (circleTurn){
// // 		board.classList.add(O_class)
// // 	} else {
// // 		board.classList.add(X_class);
// // 	}
	
// // }
