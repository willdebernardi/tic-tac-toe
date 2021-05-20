const gameBoard = (() => {
    // "e" represents empty board slot
    let board = ["e", "e", "e", "e", "e", "e", "e", "e", "e"];
    let playerState = "";

    const updateBoard = (index) => {
        if(playerState == "X") {
            board[index] = "X";
            console.log("x");
        } else if (playerState == "O") {
            board[index] = "O";
        }
    }

    const printArray = () => {
        for(let a of board) {
            console.log(a);
        }
    }

    return {board, updateBoard, playerState};
})();

const displayView = (() => {
    const updateDisplay = () => {

    }

})();

const displayController = (() => {
    const boardContainer = document.getElementById("board-container");
    const buttonContainer = document.getElementById("player-select");
    const xButton = document.getElementById("x-select");
    const oButton = document.getElementById("o-select");

    xButton.addEventListener("click", function() {
        gameBoard.playerState = "X";
        console.log(gameBoard.playerState);
        buttonContainer.classList.add("hidden");
        boardContainer.classList.remove("hidden");
    });

    oButton.addEventListener("click", function() {
        gameBoard.playerState = "O";
        buttonContainer.classList.add("hidden");
        boardContainer.classList.remove("hidden");
    });
})();