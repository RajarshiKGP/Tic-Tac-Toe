let turn = "X";
let gameOver = false;

const changeTurn = () => {
    return turn === 'X' ? '0' : 'X';
}

const checkWin = () => {
    let boxtext = document.querySelectorAll('.boxtext');
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ].forEach(e => {
        if (boxtext[e[0]].innerHTML !== "" && (boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML)) {
            document.querySelector('.info').innerHTML = `${boxtext[e[0]].innerHTML} has won`;
            gameOver = true;
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(box => {
    let b = box.querySelector(".boxtext");
    box.addEventListener("click", () => {
        if (b.innerHTML == "") {
            b.innerHTML = turn;
            turn = changeTurn();
            checkWin();
            if (!gameOver)
                document.getElementsByClassName('info')[0].innerHTML = `Turn of ${turn}`;
        }
    })
})

reset.addEventListener('click', () => {
    let boxes = document.getElementsByClassName('boxtext');
    Array.from(boxes).forEach(box => {
        box.innerHTML = "";
    })
    turn = 'X';
    gameOver = false;
    document.querySelector('.info').innerHTML = `Turn of ${turn}`;
})