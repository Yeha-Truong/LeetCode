function searchRange(nums: number[], target: number): number[] {
    var last: number = nums.length - 1;
    var first: number = 0;
    var index: number = 0;
    var found: boolean = false;

    while (first <= last) {
        index = Math.floor((first + last) / 2);

        if (nums[index] == target) {
            found = true;

            break;
        }
        else if (nums[index] > target)
            last = index - 1;
        else
            first = index + 1;

    }


    if (!found) {
        return [-1, -1];
    }
    else {
        first = index;
        last = index;

        while (nums[first - 1] == target)
            first--;
        while (nums[last + 1] == target)
            last++;

        return [first, last];
    }
};