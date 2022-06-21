export default function numRollsToTarget(d: number, f: number, target: number): number {
    return loop(d, f, target, 0);
};

function loop(d: number, f: number, target: number, total: number): number {
    if (target == 0 && d == 0) {
        total++;
        return total;
    }
    if (target > f * d)
        return total;
    if (d == 0)
        return total;
    for (let index = 1; index <= f; index++) {
        total = loop(d - 1, f, target - index, total);
    }

    return total;
}