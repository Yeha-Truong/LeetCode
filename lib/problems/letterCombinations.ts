let numbers: string[][] = [[' '], [], ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];

function letterCombinations(digits: string): string[] {
    if (digits.length == 0)
        return [];
    return solve(digits, 0);
};

function solve(digits: string, index: number): string[] {
    if (index == digits.length - 1)
        return numbers[Number.parseInt(digits[index])];

    let sets: string[] = solve(digits, index + 1);
    console.log(sets);
    let result: string[] = [];

    sets.forEach((element) => {
        numbers[Number.parseInt(digits[index])].forEach((sub_element) => {
            result.push(sub_element.concat(element));
        });
    });

    return result;
}