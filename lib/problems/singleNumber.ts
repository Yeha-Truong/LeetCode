function singleNumber(nums: number[]): number {
    return nums.reduce((previous, current) => previous ^ current);
};