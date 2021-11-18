export function minCostClimbingStairs(cost: number[]): number {
    var mins: number[] = [];
    mins[0] = cost[0];
    mins[1] = cost[1];

    cost.push(0);

    for (let index: number = 2; index < cost.length; index++) {
        mins[index] = Math.min(mins[index - 1], mins[index - 2]) + cost[index];
    }

    return mins[mins.length - 1];
};