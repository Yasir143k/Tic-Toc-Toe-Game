console.log("Welcome to Tic Tac Toe");

// Audio elements
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOverSound = new Audio("gameover.mp3");

// Initial turn and game status
let turn = "X";
let gameOver = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

// Function to check for a win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach(e => {
        if (
            boxText[e[0]].textContent !== "" &&
            boxText[e[0]].textContent === boxText[e[1]].textContent &&
            boxText[e[1]].textContent === boxText[e[2]].textContent
        ) {
            document.querySelector('.info').textContent = boxText[e[0]].textContent + " Won";
            gameOver = true;
           
        }
    });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxText.textContent === '' && !gameOver) {
            boxText.textContent = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].textContent = "Turn for " + turn;
            }
        }
    });
});
let reset = document.getElementById('reset');

reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.boxtext');
    boxText.forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].textContent = "Turn for " + turn;
});
