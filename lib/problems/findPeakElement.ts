function findPeakElement(nums: number[]): number {
    var last: number = nums.length - 1;
    var first: number = 0;

    while (first <= last) {
        var index = Math.floor((first + last) / 2);

        if (nums[index] >= nums[index + 1])
            last = index - 1;
        else
            first = index + 1;
    }

    return nums[first];
};