function fib(n: number): number {
    var fibs: number[] = [];
    fibs[0] = 0;
    fibs[1] = 1;

    for (let index: number = 2; index <= n; index++) {
        fibs[index] = fibs[index - 1] + fibs[index - 2];
    }

    return fibs[n];

};
