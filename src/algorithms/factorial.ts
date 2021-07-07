export const factorialIterative = (num: number) => {
    let factorial = 1;
    for (let i = 2; i <= num; i += 1) {
        factorial *= i;
    }
    return factorial;
};

export const factorialRecursive = (num: number): number => {
    if (num === 0) return 1;
    return num * factorialRecursive(num - 1);
};

export const trailingZerosForFactorial = (num: number) => {
    let val = 0;
    for (let i = 5; i <= num; i *= 5) {
        val += Math.floor(num / i);
    }
    return val;
};
