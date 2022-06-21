export default function maxArea(height: number[]): number {
  var first: number = 0;
  var second: number = height.length;
  var area: number = 0;

  while (first < second) {
    var current_area: number;

    if (height[first] < height[second]) {
      current_area = (second - first) * height[first];
      first++;
    }
    else {
      current_area = (second - first) * height[second];
      second--;
    }

    area = area > current_area ? area : current_area;
  }

  return area;
}
