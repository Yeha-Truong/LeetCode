// export default function numSubarrayProductLessThanK(nums: number[], k: number): number {
//     let result: number = 0;
//     for (let size: number = 1; size <= nums.length; size++) {
//         var product: number = 1;
//         for (let index: number = 0; index < size; index++) {
//             product *= nums[index];
//         }

//         for (let index: number = 0; index < nums.length - size + 1; index++) {
//             if (product < k)
//                 result++;

//             product /= nums[index];
//             product *= nums[index + size];
//         }
//     }

//     return result;
// };



// export default function numSubarrayProductLessThanK(nums: number[], k: number): number {
//     let result: number = 0;
//     let product: number[] = [];

//     product[0] = 1;

//     for (let index = 0; index < nums.length && index < 1; index++) {
//         for (let size: number = 1; size <= nums.length - index; size++) {
//             product[size] = product[size - 1] * nums[index + size - 1];

//             if (product[size] < k)
//                 result++;
//             else
//                 break;
//         }
//     }

//     for (let index: number = 1; index < nums.length; index++) {
//         let size: number;

//         for (size = 1; size <= nums.length - index; size++) {
//             if (product[size] != undefined)
//                 product[size] = product[size] / nums[index - 1] * nums[index + size - 1];
//             else
//                 product[size] = product[size - 1] * nums[index + size - 1];

//             if (product[size] < k)
//                 result++;
//             else
//                 break;
//         }

//         product = product.slice(0, size);
//     }

//     return result;
// };


export default function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let result: number = 0;
    let product: number = 1;
    let start: number = 0;
    let end: number = 0;

    while (end < nums.length) {
        product *= nums[end];

        while (product >= k)
            result /= nums[start++];

        result += (end - start + 1);
        end++;
    }

    return result;
};