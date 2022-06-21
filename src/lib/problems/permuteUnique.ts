export default function permuteUnique(nums: number[]): number[][] {
    if (nums.length == 1)
        return [[nums[0]]];

    let num: number = nums.pop()!;
    let sets: number[][] = permuteUnique(nums);
    let result: number[][] = [];

    if (sets[0].indexOf(num) == -1)
        sets.forEach((set) => {
            for (let index: number = 0; index <= set.length; index++)
                result.push(set.slice(0, index).concat([num], set.slice(index)));
        });
    else
        sets.forEach((set) => {
            for (let index: number = set.length; index >= 0; index--) {
                if (set[index] == num)
                    break;

                result.push(set.slice(0, index).concat([num], set.slice(index)));
            }
        });

    return result;
};