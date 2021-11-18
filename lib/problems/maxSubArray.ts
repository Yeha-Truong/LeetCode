// function maxSubArray(nums: number[]): number {
//     var result: number = Number.NEGATIVE_INFINITY;

//     for (let start: number = 0; start < nums.length; start = last + 1) {
//         var sum = 0;
//         var max = Number.NEGATIVE_INFINITY;
//         var last = start;

//         for (let index: number = start; index < nums.length; index++) {
//             sum += nums[index];

//             if (sum >= max) {
//                 max = sum;
//                 last = index;
//             }
//         }

//         sum = max;

//         for (let index: number = start; index < last; index++) {
//             sum -= nums[index];
//             if (sum > max)
//                 max = sum;
//         }

//         if (max > result)
//             result = max;
//     }

//     return result;

// };


function maxSubArray(nums: number[]): number {
    var result: number = Number.NEGATIVE_INFINITY;
    var sum: number = 0;

    for (let index = 0; index < nums.length; index++) {
        if (sum < 0)
            sum = 0;

        sum += nums[index];

        if (result < sum)
            result = sum;

    }

    return result;

};