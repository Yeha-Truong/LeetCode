export default function searchInsert(nums: number[], target: number): number {
    var last: number = nums.length - 1;
    var first: number = 0;
    var index: number = -1;

    while (first <= last) {
        index = Math.floor((first + last) / 2);

        if (nums[index] == target)
            return index;
        else if (nums[index] > target)
            last = index - 1;
        else
            first = index + 1;

    }

    return nums[index] > target ? index : index + 1;
};