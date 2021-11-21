import { plural } from './plural.util'

export function pluralTime(number: string | number, timeObject): string[] {
    const timeStrings: string[] = []

    if (timeObject.days)
        timeStrings.push(
            plural(Number(number), ['день', 'дня', 'дней'])
        )

    if (timeObject.hours)
        timeStrings.push(
            plural(Number(number), ['час', 'часа', 'часов'])
        )

    if (timeObject.minutes)
        timeStrings.push(
            plural(Number(number), ['минута', 'минуты', 'минут'])
        )

    if (timeObject.seconds)
        timeStrings.push(
            plural(Number(number), ['секунд', 'секунды', 'секунд'])
        )

    return timeStrings
}