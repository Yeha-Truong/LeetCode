export default function lengthOfLongestSubstring(s: string): number {
  let position: number[] = [];
  let length: number = 0;
  let origin: number = 0;
  for (let i: number = 0; i < s.length; i++) {
    if (position[s[i].charCodeAt(0)] + 1 > origin)
      origin = position[s[i].charCodeAt(0)] + 1;

    position[s[i].charCodeAt(0)] = i;
    length = length > i + 1 - origin ? length : i + 1 - origin;
  }
  return length;
}
