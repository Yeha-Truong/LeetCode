export default function myAtoi(s: string): number {
  let validator: number = Math.pow(2, 31);
  let sign: boolean = false;
  let result: number = 0;
  let index: number = 0;

  while (s[index] == " ") index++;

  if (RegExp("[-+]").test(s[index])) {
    sign = s[index] == "-" ? true : false;
    index++;
  }

  validator = sign ? validator : validator - 1;

  while (index < s.length) {
    if (RegExp("[0-9]").test(s[index])) {
      result = result * 10 + (s[index].charCodeAt(0) - "0".charCodeAt(0));
      if (result > validator) return sign ? -validator : validator;

      index++;
    } else break;
  }

  result = result * (sign ? -1 : 1);

  return result;
}
