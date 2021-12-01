function combinationSum(candidates: number[], target: number): number[][] {
    return solve(candidates, target, 0, 0);
};

function solve(candidates: number[], target: number, index: number, sum: number) {
    if (sum > target)
        return [];

    if (sum == target)
        return [[]];

    let result: number[][] = [];

    for (let sub_index: number = index; sub_index < candidates.length; sub_index++) {
        let sub_result = solve(candidates, target, sub_index, sum + candidates[sub_index]);

        sub_result.forEach((element) => {
            result.push([candidates[sub_index]].concat(element));
        });
    }

    return result;
}