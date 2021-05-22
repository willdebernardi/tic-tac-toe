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

    const checkWin = () => {
        let winPos = {
            rowOne: [board[0], board[1], board[2]],
            rowTwo: [board[3], board[4], board[5]],
            rowThree: [board[6], board[7], board[8]],
            vertOne: [board[0], board[3], board[6]],
            vertTwo: [board[1], board[4], board[7]],
            vertThree: [board[2], board[5], board[8]],
            diagonal: [board[0], board[4], board[8]]
        }

        let result = false;
        let trueCounter = 0;
        for(let property in winPos) {
            trueCounter = 0;
            for(let value in winPos[property]) {
                // console.log([winPos[property]]);
                if(winPos[property][value] == "X") {
                    trueCounter++;
                    if(trueCounter == 3) {
                        result = true;
                        break;
                    }
                } else if (winPos[property][value] == "O") {
                    trueCounter++;
                    if(trueCounter == 3) {
                        result = true;
                        break;
                    }
                }
            }
        }
        return result;
    }

    const resetBoard = () => {
        let board = ["e", "e", "e", "e", "e", "e", "e", "e", "e"];
        console.log("forst" + board);
        playerState = "";
        displayView.resetDisplay();
    }

    return {board, updateBoard, playerState, checkWin, resetBoard};
})();

const displayView = (() => {
    const squares = document.getElementsByClassName("board-slot")
    // Convert HTMLCollection to array to use indexOf
    const squaresArray = Array.from(squares);
    const boardContainer = document.getElementById("board-container");
    const buttonContainer = document.getElementById("player-select");
    const updateDisplay = () => {
        for(let square of squaresArray) {
            let index = squaresArray.indexOf(square);
            if(gameBoard.board[index] == "X") {
                square.classList.add("x");
                square.innerHTML = "X";               
            } else if (gameBoard.board[index] == "O") {
                square.classList.add("o");
                square.innerHTML = "O";
            }
        }
    }

    const resetDisplay = () => {
        for(let square of squaresArray) {
            square.innerHTML = "";
            square.classList.remove("x", "o");
        }
        boardContainer.classList.add("hidden");
        buttonContainer.classList.remove("hidden");
    }

    return {updateDisplay, resetDisplay}
})();

const displayController = (() => {
    const squares = document.getElementsByClassName("board-slot");
    const squaresArray = Array.from(squares);
    const boardContainer = document.getElementById("board-container");
    const buttonContainer = document.getElementById("player-select");
    const xButton = document.getElementById("x-select");
    const oButton = document.getElementById("o-select");
    const turnLabel = document.getElementById("turn-label");

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

    for (let square of squaresArray) {
        square.addEventListener("click", function() {
            let index = squaresArray.indexOf(square);
            if(gameBoard.board[index] != "e") {
                return;
            }

            if(gameBoard.playerState == "X") {
                gameBoard.board[index] = "X";
                displayView.updateDisplay();
                if(gameBoard.checkWin()) {
                    // setTimeout(() => {alert("X wins!")}, 100);
                    alert("x wins")
                    gameBoard.resetBoard();
                    console.log(gameBoard.board);
                }
            } else if (gameBoard.playerState == "O") {
                gameBoard.board[index] = "O";
                displayView.updateDisplay();
                if(gameBoard.checkWin()) {
                    setTimeout(() => {alert("O wins!")}, 100);
                    gameBoard.resetBoard();
                }
            }

            if(gameBoard.playerState == "X") {
                gameBoard.playerState = "O";
            } else if (gameBoard.playerState == "O") {
                gameBoard.playerState = "X";
            }

            if(turnLabel.innerHTML == "Player one's turn") {
                turnLabel.innerHTML = "Player two's turn";
            } else {
                turnLabel.innerHTML = "Player one's turn";
            }
        });
    }
})();