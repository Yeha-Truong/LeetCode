export function longestPalindrome(s: string): string {
  let length: number = 0;
  let start: number = -1;
  for (let index = 0; index < s.length - Math.round(length / 2); index++) {
    let sub_index: number = index;
    while (s[index] == s[sub_index]) sub_index++;
    sub_index--;

    let converted = convertPalindrome(s, index, sub_index);

    if (converted.length > length) {
      length = converted.length;
      start = converted.start;
    }

    index = sub_index;
  }

  return s.substring(start, start + length);
}

function convertPalindrome(s: string, index: number, sub_index?: number) {
  if (sub_index == null) sub_index = index;

  let boundary: number = 0;
  while (
    s[index - boundary] == s[sub_index + boundary] &&
    s[index - boundary] != undefined
  )
    boundary++;

  let current: number = --boundary * 2 + (sub_index - index + 1);

  return {
    length: current,
    start: index - boundary,
  };
}
