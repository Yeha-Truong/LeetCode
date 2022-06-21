export default function majorityElement(nums: number[]): number {
    var counter: number[] = [];

    for (let index: number = 0; index < nums.length; index++) {
        if (counter[nums[index]] != undefined)
            counter[nums[index]]++;
        else
            counter[nums[index]] = 0;

        if (counter[nums[index]] > (nums.length / 2))
            return nums[index];

    }

    console.log(counter);

    return -1;
};