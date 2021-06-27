import { countDigits } from '../countDigits';

describe('countDigits', () => {
    const validTestCases: [number, number][] = [
        [0, 1],
        [9, 1],
        [15, 2],
        [763, 3],
    ];
    test.each(validTestCases)('should count number of digits for %p as %p', (num, numOfDigits) => {
        expect(countDigits(num)).toEqual(numOfDigits);
    });
});
