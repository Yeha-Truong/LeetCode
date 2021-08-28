export function reverse(x: number): number {
  const result: number =
    parseFloat(x.toString().split("").reverse().join("")) * (x >= 0 ? 1 : -1);

  let validator: number = Math.pow(2, 31);
  if (result < -validator || result > validator - 1) return 0;

  return result;
}
