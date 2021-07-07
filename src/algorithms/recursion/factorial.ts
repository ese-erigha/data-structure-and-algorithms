export const naive = (n: number): number => {
    if (n === 0) return 1;
    return n * naive(n - 1);
};

export const tailOptimized = (n: number, result: number = 1): number => {
    if (n === 0) return result;
    return tailOptimized(n - 1, result * n);
};
