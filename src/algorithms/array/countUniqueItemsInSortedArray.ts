export const countUniqueItemsInSortedArray = (arr: number[]) => {
    if (arr.length === 1) return 1;
    let unique = 1;
    for (let i = unique; i < arr.length; i += 1) {
        if (arr[i] !== arr[unique - 1]) {
            unique += 1;
        }
    }
    return unique;
};
