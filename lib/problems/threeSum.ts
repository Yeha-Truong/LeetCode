function threeSum(nums: number[]): number[][] {
    var result: number[][] = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        var j: number = i + 1;
        var k: number = nums.length - 1;

        while (j < k) {
            if (j < k) {
                if (nums[i] + nums[j] + nums[k] > 0)
                    k--;
                else if (nums[i] + nums[j] + nums[k] < 0)
                    j++;
                else {
                    result.push([nums[i], nums[j], nums[k]]);

                    while (nums[j] == nums[j + 1]) j++;
                    while (nums[k] == nums[k - 1]) k--;
                    j++;
                    k--;
                }
            }
        }


        while (nums[i] == nums[i + 1]) i++;
    }

    return result;
};
