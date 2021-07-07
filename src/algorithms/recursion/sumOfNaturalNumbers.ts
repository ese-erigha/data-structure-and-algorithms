export const naive = (num: number): number => {
    if (num === 0) return 0;
    return num + naive(num - 1);
};

export const tailOptimized = (num: number, result: number = 0): number => {
    if (num <= 0) return result;
    if (num === 1) return num + result;

    return tailOptimized(num - 1, num + result);
};
