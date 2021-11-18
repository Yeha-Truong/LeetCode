function climbStairs(n: number): number {
    var ways: number[] = [];
    ways[0] = 1;
    ways[1] = 1;

    for (let index: number = 2; index <= n; index++) {
        ways[index] = ways[index - 1] + ways[index - 2];
    }

    return ways[n];
};