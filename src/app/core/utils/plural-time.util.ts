import { plural } from './plural.util'
import { Time } from './time.interface'

export function pluralTime(number: number, timeObject: Time): string {

    const result: string[] = []

    if (timeObject.days) {
        const time = plural(number, ['день', 'дня', 'дней'])
        result.push(time)
    }

    if (timeObject.hours) {
        const time = plural(number, ['час', 'часа', 'часов'])
        result.push(time)
    }
    if (timeObject.minutes)  {
        const time = plural(number, ['минута', 'минуты', 'минут'])
        result.push(time)
    }

    if (timeObject.seconds) {
        const time = plural(number, ['секунда', 'секунды', 'секунд'])
        result.push(time)
    }

    return result.join(',')
}