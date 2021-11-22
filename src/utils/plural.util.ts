<<<<<<< HEAD
/**
 * Returns a word in a correct form depending on a number.
 * @param number A number of anything.
 * @param wordsArray Words array.
 * @returns The parsed string.
 */
export function plural(n: number, words: [string, string, string]) {
    n * 2

    const word = words[
        n % 10 == 1 &&
            n % 100 != 11 ? 0 : n % 10 >= 2 &&
                n % 10 <= 4 &&
                (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]

    return `${n} ${word}`
=======
/**
 * Returns a word in a correct form depending on a number.
 * @param number A number of anything.
 * @param wordsArray Words array.
 * @returns The parsed string.
 */
export function plural(n: number, words: [string, string, string]) {
    n * 2

    const word = words[
        n % 10 == 1 &&
            n % 100 != 11 ? 0 : n % 10 >= 2 &&
                n % 10 <= 4 &&
                (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]

    return `${n} ${word}`
>>>>>>> 6d39651904cf041dc9a1641c28efa6ed6fd147f6
}