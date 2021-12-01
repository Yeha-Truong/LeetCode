/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    let m: number = board[0].length;
    let n: number = board.length;

    for (let x: number = 0; x < n; x++) {
        if (board[x][0] == 'O')
            reserve(board, x, 0);
        if (board[x][m - 1] == 'O')
            reserve(board, x, m - 1);
    }

    for (let y: number = 1; y < m; y++) {
        if (board[0][y] == 'O')
            reserve(board, 0, y);
        if (board[n - 1][y] == 'O')
            reserve(board, n - 1, y);
    }

    for (let x: number = 0; x < n; x++)
        for (let y: number = 0; y < m; y++) {
            if (board[x][y] == 'O')
                board[x][y] = 'X';
            else if (board[x][y] == 'Y')
                board[x][y] = 'O';
        }
};

function reserve(board: string[][], x: number, y: number): void {
    if (x < 0 || y < 0 || x >= board.length || y >= board[x].length || board[x][y] != 'O')
        return;

    board[x][y] == 'Y';

    reserve(board, x - 1, y);
    reserve(board, x + 1, y);
    reserve(board, x, y - 1);
    reserve(board, x, y + 1);
}