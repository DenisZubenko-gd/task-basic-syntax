export function romanToInteger(str) {
    let result = 0,
        i = 0;
    const digits_1 = {
            Z: 2000,
            M: 1000,
            D: 500,
            C: 100,
            L: 50,
            X: 10,
            V: 5,
            I: 1,
        },
        digits_2 = { CM: 900, CD: 400, XC: 90, XL: 40, IX: 9, IV: 4 };
    for (i; i < str.length; i++) {
        let split_str = str.slice(i, i + 2);
        if (split_str in digits_2) {
            result = result + digits_2[split_str];
            i++;
        } else {
            result = result + digits_1[str.charAt(i)];
        }
    }
    return result;
}
