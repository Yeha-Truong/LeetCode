export function isMatch(s: string, p: string): boolean {
  if (p[1] == "*") {
    if (s[0] == p[0] || (p[0] == "." && s[0] != undefined))
      return isMatch(s.substr(1), p) || isMatch(s, p.substr(2));
    else return isMatch(s, p.substr(2));
  } else {
    if (s.length == 0 && p.length == 0) return true;
    if (s.length == 0 || p.length == 0) return false;
    if (s[0] == p[0] || (p[0] == "." && s[0] != undefined))
      return isMatch(s.substr(1), p.substr(1));
  }

  return false;
}

// function fill(s: string, p: string): boolean {
//   if (s.length == 0 && p.length == 0) return true;
//   if (s.length == 0 || p.length == 0) return false;

//   if (p[1] == "*") {
//     if (s[0] == p[0] || p[0] == ".")
//       return fill(s.substr(1), p) || fill(s, p.substr(2));
//     else return fill(s, p.substr(2));
//   } else {
//     if (s[0] == p[0] || p[0] == ".") return fill(s.substr(1), p.substr(1));
//   }

//   return false;
// }
