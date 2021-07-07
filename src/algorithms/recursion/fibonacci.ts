export const naive = (num: number): number => {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return naive(num - 1) + naive(num - 2);
};

export const tailOptimizedFibonacci = (num: number, a: number = 0, b: number = 1): number => {
    if (num === 0) return a;
    if (num === 1) return b;
    return tailOptimizedFibonacci(num - 1, b, a + b);
};
