function findMin(nums: number[]): number {
    let step: number = Math.floor(Math.sqrt(nums.length));

    var start: number = 0;
    var end: number = nums.length - 1;

    if (nums[0] > nums[nums.length - 1]) {
        var multiplier: number = 1;
        for (multiplier = 1; multiplier > 0; multiplier++) {
            var index: number = multiplier * step;
            var position: number = Math.min(index, nums.length - 1);
            if (nums[position] <= nums[0] || index >= nums.length)
                break;
        }

        start = (multiplier - 1) * step;
        end = Math.min(multiplier * step, nums.length - 1);
    }
    else
        return nums[0];

    for (let index = start; index <= end; index++) {
        if (nums[index] < nums[index - 1])
            return nums[index];
    }

    return -1;
};