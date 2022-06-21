export default function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let digits: number[] = [];

  while (x > 0) {
    digits.push(x % 10);
    x = Math.floor(x / 10);
  }

  let sub_index = digits.length - 1;

  for (let index = 0; index < Math.round(digits.length) - 1; index++) {
    if (digits[index] - digits[sub_index - index] != 0) return false;
  }

  return true;
}
