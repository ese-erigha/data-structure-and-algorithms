export const computeNaiveHCF = (a: number, b: number) => {
    let hcf = Math.min(a, b);
    while (hcf > 0) {
        if (a % hcf === 0 && b % hcf === 0) break;
        hcf -= 1;
    }
    return hcf;
};

export const euclidHCF = (a: number, b: number) => {
    let tempA = a;
    let tempB = b;
    while (tempA !== tempB) {
        if (tempA > tempB) tempA -= tempB;
        if (tempB > tempA) tempB -= tempA;
    }
    return tempA;
};

export const euclid2HCF = (a: number, b: number) => {
    let tempA = a;
    let tempB = b;
    while (tempA !== tempB) {
        if (tempA > tempB) tempA -= tempB;
        if (tempB > tempA) tempB -= tempA;
    }
    return tempA;
};

console.log(euclidHCF(27, 15));
