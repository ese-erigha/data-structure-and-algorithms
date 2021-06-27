/*
    Count the number of digits in a positive integer
 */
export const countDigits = (num: number): number => {
    if (Number.isNaN(num)) return 0;
    if (num < 0) throw new Error('Negative number not accepted');
    if (num < 10) return 1;

    let temp = num;
    let count = 0;
    while (temp !== 0) {
        temp = Math.floor(temp / 10);
        count += 1;
    }
    return count;
};
