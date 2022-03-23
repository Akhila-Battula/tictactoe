var board = new Array();

board[0] = new Array();
board[1] = new Array();
board[2] = new Array();

var playerTurn = "O";

function checkForWinner(){          
    if((board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O") || (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X")) {
        alert("Game Won");
        location.reload();
    } else if((board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O") || (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X")) {
        alert("Game Won");
        location.reload();
    } else if((board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O") || (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X")) {
        alert("Game Won");
        location.reload();
    } else if((board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") || (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X")) {
        alert("Game Won");
        location.reload();
    } else if((board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") || (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X")) {
        alert("Game Won");
        location.reload();
    } else if((board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O") || (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X")) {
        alert("Game Won");
        location.reload();
    } else if((board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") || (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X")) {
        alert("Game Won");
        location.reload();
    } else if((board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O") || (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")) {
        alert("Game Won");
        location.reload();
    } else {
        checkForDraw();
    }
}

var squaresFilled = 0;
function checkForDraw(){
    if(squaresFilled == 9){
            alert("THE GAME IS OVER.... IT'S A DRAW!!");
        location.reload();
    }
}

function isGameWonOrDraw(x,y) {
    if(board[x][y] == undefined) {
        if(playerTurn == "O") {
            board[x][y] = "O";
            squaresFilled++;
            playerTurn = "X";
            document.getElementById(x+""+y).innerHTML = "O";
            checkForWinner();
        } else {
            board[x][y] = "X";
            squaresFilled++;
            playerTurn = "O";
            document.getElementById(x+""+y).innerHTML = "X";
            checkForWinner();
        }
    } else {
        alert("Already Occupied");
    }
}