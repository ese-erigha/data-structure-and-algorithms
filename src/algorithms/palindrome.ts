export const isPalindromeNumber = (num: number): boolean => {
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

export const isPalindromeStringIterative = (str: string): boolean => {
    if (str.length === 1) return true;
    const middle = Math.floor(str.length / 2);
    let isPalindrome: boolean = true;
    let end = str.length;
    for (let start = 0; start < middle; start += 1) {
        end -= 1;
        if (str.charAt(start) !== str.charAt(end)) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
};

const isPalindrome = (str: string, start: number, end: number, result: boolean): boolean => {
    if (start >= end) return true;
    if (str.charAt(start) !== str.charAt(end)) return false;
    return isPalindrome(str, start + 1, end - 1, result);
};

export const isPalindromeStringRecursive = (str: string): boolean => isPalindrome(str, 0, str.length - 1, true);
