export default function convert(s: string, numRows: number): string {
  if (numRows == 1) return s;

  let index: number = 0;
  let result: string = "";
  while (index < numRows) {
    var first_gap = numRows * 2 - 2 - 2 * index;
    var second_gap = 2 * index;
    var current_gap: boolean = true;
    var current_index: number = index;
    while (current_index < s.length) {
      result += s[current_index];

      current_index =
        current_index +
        (current_gap
          ? first_gap != 0
            ? first_gap
            : second_gap
          : second_gap != 0
          ? second_gap
          : first_gap);
      current_gap = !current_gap;
    }

    index++;
  }

  return result;
}
