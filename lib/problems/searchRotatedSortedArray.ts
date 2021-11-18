export function search(nums: number[], target: number): number {
    let step: number = Math.floor(Math.sqrt(nums.length));

    var start: number = 0;
    var end: number = nums.length - 1;

    if (nums[0] <= target) {
        var multiplier: number = 1;
        for (multiplier = 1; multiplier > 0; multiplier++) {
            var index: number = multiplier * step;
            var position: number = Math.min(index, nums.length - 1);
            if (nums[position] >= target || nums[position] <= nums[0])
                break;
            if (index >= nums.length)
                return -1;
        }

        start = (multiplier - 1) * step;
        end = Math.min(multiplier * step, nums.length - 1);
    }
    else if (nums[nums.length - 1] >= target) {
        var multiplier: number = 1;
        for (multiplier = 1; multiplier > 0; multiplier++) {
            var index: number = nums.length - 1 - (multiplier * step);
            var position: number = Math.max(index, 0);
            if (nums[position] <= target || nums[position] >= nums[nums.length - 1])
                break;
            if (index < 0)
                return -1;
        }

        start = Math.max(nums.length - 1 - (multiplier * step), 0);
        end = nums.length - 1 - ((multiplier - 1) * step);
    }
    else
        return -1;

    for (let index = start; index <= end; index++) {
        if (nums[index] == target)
            return index;
    }

    return -1;
};