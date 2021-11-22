<<<<<<< HEAD
/**
 * Parses the milliseconds and returns the parsed object.
 * @param milliseconds A string or number that contains a milliseconds value.
 * @returns The parsed time object.
 */
export function parseMs(milliseconds: string | number) {
    const ms = Number(milliseconds)
    const round = ms > 0 ? Math.floor : Math.ceil

    return {
        days: round(ms / 86400000),
        hours: round(ms / 3600000) % 24,
        minutes: round(ms / 60000) % 60,
        seconds: round(ms / 1000) % 60
    }
=======
/**
 * Parses the milliseconds and returns the parsed object.
 * @param milliseconds A string or number that contains a milliseconds value.
 * @returns The parsed time object.
 */
export function parseMs(milliseconds: string | number) {
    const ms = Number(milliseconds)
    const round = ms > 0 ? Math.floor : Math.ceil

    return {
        days: round(ms / 86400000),
        hours: round(ms / 3600000) % 24,
        minutes: round(ms / 60000) % 60,
        seconds: round(ms / 1000) % 60
    }
>>>>>>> 6d39651904cf041dc9a1641c28efa6ed6fd147f6
}