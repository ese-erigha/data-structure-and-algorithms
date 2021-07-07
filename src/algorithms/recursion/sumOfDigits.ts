export const sumOfDigits = (num: number, result: number = 0): number => {
    if (num === 0) return result;
    const modulo = num % 10;
    return sumOfDigits(Math.floor(num / 10), result + modulo);
};
