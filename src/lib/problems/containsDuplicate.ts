// export default function containsDuplicate(nums: number[]): boolean {
//     for (let index: number = 0; index < nums.length; index++) {
//         if (nums.lastIndexOf(nums[index]) != index)
//             return true;

//     }

//     return false;
// };

export default function containsDuplicate(nums: number[]): boolean {
    var positions: boolean[] = [false];

    for (let index: number = 0; index < nums.length; index++) {
        if (!positions[nums[index]])
            positions[nums[index]] = true;
        else
            return true;

    }

    return false;
};