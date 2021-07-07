export const trailingZeros = (num: number) => {
    let temp = num;
    let count = 0;

    while (temp % 10 === 0) {
        count += 1;
        temp = Math.floor(temp / 10);
    }

    return count;
};
