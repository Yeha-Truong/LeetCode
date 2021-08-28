import { convert } from "./problems/convertZigZac";
import { findMedianSortedArrays } from "./problems/findMedianSortedArrays";
import { isMatch } from "./problems/isMatch";
import { isPalindrome } from "./problems/isPalindrome";
import { lengthOfLongestSubstring } from "./problems/lengthOfLongestSubstring";
import { longestPalindrome } from "./problems/longestPalindrome";
import { maxArea } from "./problems/maxArea";
import { myAtoi } from "./problems/myAtoi";
import { reverse } from "./problems/reverse";

export function threeSum(nums: number[]): number[][] {
  let spaces: number[][] = [];
  let validator: string[] = [];
  nums = nums.sort((a, b) => a - b);

  for (let i: number = 0; i < nums.length - 2; i++)
    for (let j: number = i + 1; j < nums.length - 1; j++) {
      let sub: number[] = [];
      sub = sub.concat(nums);
      sub.splice(0, j + 1);

      if (
        validator.indexOf(`${nums[i]}-${nums[j]}`) < 0 &&
        sub.indexOf(-nums[i] - nums[j]) >= 0
      ) {
        validator.push(`${nums[i]}-${nums[j]}`);
        spaces.push([nums[i], nums[j], -nums[i] - nums[j]]);
      }
    }

  return spaces;
}

console.log(maxArea([1, 2, 4, 3]));
