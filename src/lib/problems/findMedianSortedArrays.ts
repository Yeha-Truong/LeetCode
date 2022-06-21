export default function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  return findMedian(
    nums1,
    nums2,
    0,
    0,
    Math.round((nums1.length + nums2.length) / 2) - 1
  );
}

function findMedian(
  nums1: number[],
  nums2: number[],
  offset1: number,
  offset2: number,
  boundary: number
): number {
  if (offset1 == boundary && offset2 == boundary) {
    let aggregate: number[] = nums1.concat(nums2);
    return (aggregate[0] + aggregate[aggregate.length - 1]) / 2;
  }

  let median1: number = median(nums1);
  let median2: number = median(nums2);

  let first: number[] = median1 < median2 ? nums1.slice() : nums2.slice();
  let second: number[] = median1 < median2 ? nums2.slice() : nums1.slice();
  let boundary1: number = Math.round(first.length / 2) - 1;
  let boundary2: number = Math.round(second.length / 2) - 1;

  if (boundary1 > 0 && boundary2 > 0)
    if (offset1 + boundary1 < boundary || offset2 + boundary2 < boundary) {
      let validator1: boolean =
        first[Math.floor(first.length / 2) - (first.length % 2 == 0 ? 2 : 1)] <=
        second[
        Math.floor(second.length / 2) - (second.length % 2 == 0 ? 2 : 1)
        ];
      let validator2: boolean =
        second[Math.floor(second.length / 2) + 1] >=
        first[Math.floor(first.length / 2) + 1];

      if (validator1 && validator2) {
        if (offset1 + boundary1 < boundary && validator1) {
          first.splice(0, boundary1);
          offset1 += boundary1;
        }
        if (offset2 + boundary2 < boundary && validator2) {
          second.splice(second.length - boundary2, boundary2);
          offset2 += boundary2;
        }
        return findMedian(first, second, offset1, offset2, boundary);
      }
    }

  if (offset1 < boundary) {
    if (first[0] < second[0]) first.splice(0, 1);
    else second.splice(0, 1);
    offset1 += 1;
  }

  if (offset2 < boundary) {
    if (first[first.length - 1] > second[second.length - 1]) first.pop();
    else second.pop();
    offset2 += 1;
  }

  return findMedian(first, second, offset1, offset2, boundary);
}

function median(nums: number[]): number {
  if (nums.length == 0) return Number.NEGATIVE_INFINITY;
  return (
    (nums[Math.floor(nums.length / 2) - (nums.length % 2 == 0 ? 1 : 0)] +
      nums[Math.floor(nums.length / 2)]) /
    2
  );
}
