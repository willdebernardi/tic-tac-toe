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
    const squares = document.getElementsByClassName("board-slot")
    // Convert HTMLCollection to array to use indexOf
    const squaresArray = Array.from(squares);
    // TODO: change square to be X/O rather than colors
    const updateDisplay = () => {
        for(let square of squaresArray) {
            let index = squaresArray.indexOf(square);
            if(gameBoard.board[index] == "X") {
                square.classList.add("green");
            } else if (gameBoard.board[index] == "O") {
                square.classList.add("orange");
            }
        }
    }

    return {updateDisplay}
})();

const displayController = (() => {
    const squares = document.getElementsByClassName("board-slot");
    const squaresArray = Array.from(squares);
    const boardContainer = document.getElementById("board-container");
    const buttonContainer = document.getElementById("player-select");
    const xButton = document.getElementById("x-select");
    const oButton = document.getElementById("o-select");

    xButton.addEventListener("click", function() {
        gameBoard.playerState = "X";
        buttonContainer.classList.add("hidden");
        boardContainer.classList.remove("hidden");
    });

    oButton.addEventListener("click", function() {
        gameBoard.playerState = "O";
        buttonContainer.classList.add("hidden");
        boardContainer.classList.remove("hidden");
    });

    for (let square of squaresArray) {
        square.addEventListener("click", function() {
            let index = squaresArray.indexOf(square);
            if(gameBoard.playerState == "X") {
                gameBoard.board[index] = "X";
                displayView.updateDisplay();
            } else if (gameBoard.playerState == "O") {
                gameBoard.board[index] = "O";
                displayView.updateDisplay();
            }
        });
    }
})();