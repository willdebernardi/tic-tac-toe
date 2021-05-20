const gameBoard = (() => {
    // "e" represents empty board slot
    let board = ["e", "e", "e", "e", "e", "e", "e", "e", "e"];

    const updateBoard = (index, state) => {
        if(state == "X") {
            board[index] = "X";
            console.log("x");
        } else if (state == "O") {
            board[index] = "O";
        }
    }

    const printArray = () => {
        for(let a of board) {
            console.log(a);
        }
    }

    return {board, updateBoard};
})();

const displayController = (() => {
    const updateDisplay = () => {

    }
    
})();