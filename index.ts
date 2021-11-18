import { convert } from "./lib/problems/convertZigZac";
import { findMedianSortedArrays } from "./lib/problems/findMedianSortedArrays";
import { isMatch } from "./lib/problems/isMatch";
import { isPalindrome } from "./lib/problems/isPalindrome";
import { lengthOfLongestSubstring } from "./lib/problems/lengthOfLongestSubstring";
import { longestPalindrome } from "./lib/problems/longestPalindrome";
import { maxArea } from "./lib/problems/maxArea";
import { myAtoi } from "./lib/problems/myAtoi";
import { numRollsToTarget } from "./lib/problems/numRollsToTarget";
import { reverse } from "./lib/problems/reverse";
import { demo_Vector } from "./lib/problems/vector";
import { search } from "./lib/problems/searchRotatedSortedArray"
import { minCostClimbingStairs } from "./lib/problems/minCostClimbStairs";

// export function threeSum(nums: number[]): number[][] {
//   let spaces: number[][] = [];
//   let validator: string[] = [];
//   nums = nums.sort((a, b) => a - b);

//   for (let i: number = 0; i < nums.length - 2; i++)
//     for (let j: number = i + 1; j < nums.length - 1; j++) {
//       let sub: number[] = [];
//       sub = sub.concat(nums);
//       sub.splice(0, j + 1);

//       if (
//         validator.indexOf(`${nums[i]}-${nums[j]}`) < 0 &&
//         sub.indexOf(-nums[i] - nums[j]) >= 0
//       ) {
//         validator.push(`${nums[i]}-${nums[j]}`);
//         spaces.push([nums[i], nums[j], -nums[i] - nums[j]]);
//       }
//     }

//   return spaces;
// }

console.log(minCostClimbingStairs([10, 15, 20]));
console.log('Done!');