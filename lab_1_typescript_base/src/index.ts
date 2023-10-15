import { checkWin, isFill, isRightMove } from "./board"

let resetButton = <HTMLButtonElement>document.getElementById("reset")
let info = <HTMLDivElement>document.getElementById("info")
let buttons: HTMLButtonElement[] = []
let board: string[] = []
for (let i = 0; i < 9; i++) {
    let b = <HTMLButtonElement>document.getElementById("f" + i)
    b.onclick = function (): void { step(i) }
    buttons.push(b)
    let f = b.textContent
    if (f == null) { f = "_" };
    board.push(f)
}
let zeroBoard = board.slice()
let gameOver = false
let turn = "X"

function getTurn(): "X" | "0" 
{
    if (turn == "X") 
    {
        turn = "0"
        return ("X")
    }
    else 
    {
        turn = "X"
        return ("0")
    }
}


const reset = function (this: GlobalEventHandlers): void
{
    board = zeroBoard.slice();
    for(let i=0; i<9;i++)
    {
        buttons[i].textContent = '_';
    }
    turn = 'X';
    gameOver = false;
    info.textContent='Ходит Х';
}

resetButton.onclick = reset

function step(cell: number): void
{
    info.textContent = '';
    if(isRightMove(cell, board)===false)
    {
        info.textContent = 'Сюда ходить нельзя';
    }
    if(checkWin(board) === '_' && isFill(board) === false && isRightMove(cell, board) === true)
    {
        board[cell]=turn;
        buttons[cell].textContent=turn;
        getTurn();
    }
    if(checkWin(board) !== '_')
    {
        gameOver = true;
        info.textContent = checkWin(board);
    }
    if(checkWin(board)==='_' && isFill(board) === true)
    {
        info.textContent = 'Ничья';
        gameOver = true;
    }

    checkWin(board);

}
