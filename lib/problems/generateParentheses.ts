function generateParenthesis(n: number): string[] {
    n--;
    let sets: string[] = [];
    let result: string[] = [''];
    for (let index = 0; index < n; index++) {
        result[0] = result[0].concat(')');
    }

    for (let index: number = 0; index <= result[0].length; index++)
        sets.push(result[0].slice(0, index).concat('(', result[0].slice(index)));

    result = sets;
    sets = [];

    for (let index: number = 1; index < n; index++) {
        result.forEach((set) => {
            for (let sub_index: number = set.length; sub_index >= 0; sub_index--) {
                if (set[sub_index] == '(')
                    break;
                sets.push(set.slice(0, sub_index).concat('(', set.slice(sub_index)));
            }
        });

        result = sets;
        sets = [];
    }

    console.log(result);

    result.forEach((element) => {
        element = '('.concat(element, ')');
    });

    return result;
};
