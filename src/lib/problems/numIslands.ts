export default function numIslands(grid: string[][]): number {
    let result: number = 0;
    for (let index: number = 0; index < grid.length; index++)
        for (let sub_index: number = 0; sub_index < grid[index].length; sub_index++) {
            if (grid[index][sub_index] == '1') {
                result++;
                grid = markIsland(grid, index, sub_index);
            }
        }


    return result;
};

function markIsland(grid: string[][], x: number, y: number): string[][] {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[x].length || grid[x][y] == '0')
        return grid;

    grid[x][y] = '0';

    markIsland(grid, x + 1, y);
    markIsland(grid, x, y - 1);
    markIsland(grid, x, y + 1);
    markIsland(grid, x - 1, y);

    return grid;
}