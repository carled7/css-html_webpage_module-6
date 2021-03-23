let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['O', 'X'];
let gameOver = false;
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let z = 0;
let t = 0;
function handleMove(i) {
    if (gameOver) {
        return;
    }

    if (board[i] == '') {
        board[i] = symbols[playerTime]

        gameOver = isWin();

        playerX = document.getElementById("counterX");
        playerO = document.getElementById("counterO");

        if (playerTime == 0) {
            playerTime = 1;

            playerX.style.backgroundColor = "#A2A2A2";
            playerO.style.backgroundColor = "#F2F2F2";
        } else {
            playerTime = 0;

            playerO.style.backgroundColor = "#A2A2A2";
            playerX.style.backgroundColor = "#F2F2F2";
        }
    }
    return gameOver;
}

function isWin() {

    for (let x = 0; x < winStates.length; x++) {
        let seq = winStates[x];

        let pos0 = seq[0];
        let pos1 = seq[1];
        let pos2 = seq[2];

        if (board[pos0] == board[pos1] && board[pos0] == board[pos2] && board[pos1] != '') {
            if (board[pos0] == 'O' && board[pos1] == 'O' && board[pos2] == 'O') {

                z++;
                console.log(z);
                let counterO = document.getElementById("counterO");
                counterO.innerText = z;
                return true;
            } else {
                t++;
                console.log(t);
                let counterX = document.getElementById("counterX");
                counterX.innerText = t;
                return true;
            }
        }
    }

}