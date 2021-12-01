// function shortestPathBinaryMatrix(grid: number[][]): number {
//     return findPath(grid, 0, 0, 0, -1);
// };

// function findPath(grid: number[][], x: number, y: number, value: number, length: number): number {
//     if (grid[x][y] == 1)
//         return -1;

//     value++;

//     if (x == grid.length - 1 && y == grid[x].length - 1)
//         return value;

//     grid[x][y] = 1;

//     if (value + Math.max(grid.length - 1 - x, grid.length - 1 - y) < length || length == -1) {
//         let result: number = Number.POSITIVE_INFINITY;
//         let calculated: number = -1;

//         for (let index: number = -1; index < 2; index++)
//             for (let sub_index: number = -1; sub_index < 2; sub_index++) {
//                 if ((x + index >= 0) && (y + sub_index >= 0) && (x + index < grid.length) && (y + sub_index < grid[x].length)) {
//                     if (grid[x + index][y + sub_index] == 0) {
//                         calculated = findPath(grid, x + index, y + sub_index, value, length);

//                         result = calculated != -1 ? Math.min(result, calculated) : result;

//                         if (result != -1)
//                             if (length == -1)
//                                 length = result;
//                             else
//                                 length = Math.min(length, result);

//                     }
//                 }
//             }

//         grid[x][y] = 0;
//         return result != Number.POSITIVE_INFINITY ? result : -1;
//     }

//     grid[x][y] = 0;
//     return -1;
// }

function shortestPathBinaryMatrix(grid: number[][]): number {
    if (grid[0][0] == 1)
        return -1;

    if (grid.length == 1)
        return 1;

    let destination: number[] = [grid.length - 1, grid.length - 1];

    if (grid[destination[0]][destination[1]] == 1)
        return -1;

    let progress: number[][] = [];
    let queue: number[][] = [];
    let counter: number = 1;

    progress.push([0, 0]);
    grid[0][0] == 1;

    while (progress.length != 0) {
        let present: number[] | undefined = progress.shift();
        if (present != undefined)
            for (let index = -1; index < 2; index++)
                for (let sub_index = -1; sub_index < 2; sub_index++) {
                    let x: number = present[0] + index;
                    let y: number = present[1] + sub_index;
                    if (x == destination[0] && y == destination[1])
                        return counter + 1;
                    if (x >= 0 && y >= 0 && x < grid.length && y < grid[x].length)
                        if (grid[x][y] == 0) {
                            queue.push([x, y]);
                            grid[x][y] = 1;
                        }
                }

        if (progress.length == 0) {
            counter++;
            progress = queue;
            queue = [];
        }
    }

    return -1;
};