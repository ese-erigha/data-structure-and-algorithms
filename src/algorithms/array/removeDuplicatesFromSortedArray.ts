export const removeDuplicatesFromSortedArray = (arr: number[]) => {
    if (arr.length === 1) return arr;
    const newArr: number[] = [];
    let pushIndex = 0;
    newArr[pushIndex] = arr[pushIndex];
    for (let i = pushIndex + 1; i < arr.length; i += 1) {
        if (arr[i] !== newArr[pushIndex]) {
            pushIndex += 1;
            newArr[pushIndex] = arr[i];
        }
    }
    return newArr;
};
