function findAnagrams(s: string, p: string): number[] {
    let result: number[] = [];
    let p_value: number[] = value(p);
    var s_value: number[] = value(s.substr(0, p.length));
    let index: number;

    for (index = 0; index < s.length - p.length; index++) {
        if (compare(s_value, p_value))
            result.push(index);

        s_value = changeValue(s_value, s[index], s[index + p.length]);

    }

    if (compare(s_value, p_value))
        result.push(index);

    return result;
};

function value(s: string): number[] {
    var result: number[] = [];
    for (let index = 0; index <= ('z'.charCodeAt(0) - 'a'.charCodeAt(0)); index++) {
        result.push(0);
    }

    for (let index = 0; index < s.length; index++)
        result[s.charCodeAt(index) - 97]++;

    return result;
}

function changeValue(s: number[], value: string, replacer: string): number[] {
    s[value.charCodeAt(0) - 97]--;
    s[replacer.charCodeAt(0) - 97]++;
    return s;
}

function compare(s: number[], p: number[]): boolean {
    for (let index = 0; index < s.length; index++) {
        if (s[index] != p[index])
            return false;
    }

    return true;
}