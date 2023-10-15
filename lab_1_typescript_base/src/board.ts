export function boardFromString(s: string): string[]    //разивает строку на массив символов
{
    const arr: string[] = new Array(9);
    for(let i=0; i<9; i++)
    {
        arr[i] = s[i];
    }
    return arr;
}

export function boardToString(b: string[]): string
{
    let bstr = '';
    for(let i=0; i<9; i++)
    {
        bstr+=b[i]; 
    }

    return bstr;
}

export function isFill(board: string[]): boolean
{
    for(let i=0; i<9; i++)
    {
        if(board[i]==='_')
        {
            return false;
        } 
    }
    return true;
}

export function isRightMove(move: number, board: string[]): boolean
{
    if(board[move]==='_')
        {
            return true;
        } 
    else
    {
        return false;
    }
    
}

const winPos = 
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function getLineChar(line: number[], board: string[]): string[]
{
    return [board[line[0]], board[line[1]], board[line[2]]]
}

export function checkWin(board: string[]): string 
{
    for (let i = 0; i < winPos.length; i++)
    {
        let win: string[] = getLineChar(winPos[i], board);
        
        if (win[0] == 'X' && win[1] == 'X' && win[2] == 'X')
            return 'X';
        else if (win[0] == '0' && win[1] == '0' && win[2] == '0')
            return '0';
    }
    return '_';
}