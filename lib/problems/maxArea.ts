export function maxArea(height: number[]): number {
  let first: number = 0;
  let second: number = 0;
  let perimeter: number = 0;

  console.log(height);

  for (let index = 1; index < height.length; index++) {
    var first_area: number =
      Math.min(height[first], height[index]) + (index - first);
    var second_area: number =
      Math.min(height[second], height[index]) + (index - second);
    console.log(
      first + "-" + second + "-" + index + "-" + first_area + "-" + second_area
    );
    console.log("------------------------");

    if (Math.max(first_area, second_area) > perimeter) {
      if (first_area > second_area) {
        second = index;
        perimeter = first_area;
      } else if (first_area < second_area) {
        first = index;
        perimeter = second_area;
      } else {
        first =
          height[first] > height[second]
            ? first
            : height[first] == height[second]
            ? first < second
              ? first
              : second
            : second;
        second = index;
        perimeter = first_area;
      }
    }
  }

  return Math.min(height[first], height[second]) * Math.abs(second - first);
}
