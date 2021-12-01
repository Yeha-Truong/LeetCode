function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);

    let sets: number[][] = [[]];
    let start: number = 0;

    for (let index = 0; index < nums.length; index++) {
        let num: number = nums[index];
        let length: number = sets.length;

        for (let sub_index = start; sub_index < length; sub_index++)
            sets.push(sets[sub_index].concat([num]));

        start = num == nums[index + 1] ? length : 0;
    }

    return sets;
};

// function subsetsWithDup(nums: number[]): number[][] {
//     nums.sort((a, b) => a - b);

//     let sets: number[][] = [[]];
//     let lastDuplicate: number | undefined = undefined;

//     for (let index = 0; index < nums.length; index++) {
//         let num: number = nums[index];
//         let isDuplicated: boolean = num == nums[index - 1];

//         if (!isDuplicated)
//             sets.forEach((element) => {
//                 sets.push(element.concat([num]));
//             });
//         else {
//             let sub_index: number;
//             for (sub_index = 0; sub_index < sets.length; sub_index++) {
//                 if (sets[sub_index].length == 1 && sets[sub_index][0] == num)
//                     break;
//             }

//             sets = sets.slice(0, sub_index).concat(sets.slice(sub_index + 1));

//             let length: number = sets.length;

//             sets.push([num]);

//             for (; sub_index < length; sub_index++)
//                 sets.push(sets[sub_index].concat([num]));

//             if (num != lastDuplicate)
//                 sets.push([num, num]);

//             lastDuplicate = num;
//         }
//     }

//     return sets;
// };