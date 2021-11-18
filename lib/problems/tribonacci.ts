function tribonacci(n: number): number {
    var tribonaccies: number[] = [];
    tribonaccies[0] = 0;
    tribonaccies[1] = 1;
    tribonaccies[2] = 1;

    for (let index = 3; index <= n; index++) {
        tribonaccies[index] = tribonaccies[index - 1] + tribonaccies[index - 2] + tribonaccies[index - 3];
    }

    return tribonaccies[n];
};