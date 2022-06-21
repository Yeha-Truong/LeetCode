export default function minSubArrayLen(target: number, nums: number[]): number {
    let result: number = Number.POSITIVE_INFINITY;
    let sum: number = 0;
    let start: number = 0;
    let end: number = 0;

    while (end < nums.length) {
        sum += nums[end];
        while ((sum - nums[start]) >= target)
            sum -= nums[start++];
        
        if(sum >= target)
            result = Math.min(result, (end - start + 1));

        end++;
    }

    return result != Number.POSITIVE_INFINITY ? result : 0;
};