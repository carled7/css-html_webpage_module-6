document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})
function restartGame() {
    gameOver = false;
    playerTime = 0;

    let squares = document.querySelectorAll(".square");

    for (let y = 0; y < board.length; y++) {
        board[y] = '';
    }

    squares.forEach((square) => {
        square.innerHTML = `<div class = ''></div>`
    })
    playerO.style.backgroundColor = "#A2A2A2";
    playerX.style.backgroundColor = "#F2F2F2";
}
function resetGame (){
    restartGame();
    let counterO = document.getElementById("counterO");
    counterO.innerText = 0;
    let counterX = document.getElementById("counterX");
    counterX.innerText = 0;
}

function handleClick(event) {

    let square = event.target;
    let position = square.id

    if (handleMove(position)) {
        setTimeout(() => {
            alert("The game is over")
        }, 10)
    }
    updateBoard(position);
}

function updateBoard(position) {

    let square = document.getElementById(position.toString());
    let symbol = board[position]
    square.innerHTML = `<div class = '${symbol}'></div>`
}