export const isPalindrome = (num: number): boolean => {
    if (Number.isNaN(num)) throw new Error('Not a number');
    if (num < 0) throw new Error('Negative number not accepted');
    if (num < 10) return true;
    const base = 10;
    let temp = num;
    let construct = 0;
    while (temp !== 0) {
        const modulus = temp % base;
        construct = construct * 10 + modulus;
        temp = Math.floor(temp / base);
    }
    return construct === num;
};
