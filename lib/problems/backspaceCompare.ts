function backspaceCompare(s: string, t: string): boolean {
    var i: number = s.length;
    var j: number = t.length;

    while (i >= 0 || j > 0) {
        var counter_s: number = 0;
        var counter_t: number = 0;

        while (s[i - counter_s] == '#' || counter_s > 0) {
            if (s[i - counter_s] != '#') {
                i -= 2;
                counter_s--;
            }
            else
                counter_s++;
        }

        while (t[j - counter_t] == '#' || counter_t > 0) {
            if (t[j - counter_t] != '#') {
                j -= 2;
                counter_t--;
            }
            else
                counter_t++;
        }

        if (s[i] != t[j])
            return false;

        i--;
        j--;
    }

    return true;
};