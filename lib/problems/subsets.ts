function subsets(nums: number[]): number[][] {
    if (nums.length == 0)
        return [[]];

    let num: number = nums.pop()!;

    let sets: number[][] = subsets(nums);

    sets.forEach((element) => {
        sets.push(element.concat([num]));
    });

    return sets;
};