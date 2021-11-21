import {
    Message, CommandInteraction
} from 'discord.js'

import Kotyabot from '../classes/Kotyabot'

class Utils {
    public bot: Kotyabot

    /**
    * Utils constructor.
    */
    public constructor(bot: Kotyabot) {
        this.bot = bot
    }

    /**
     * Fetches the message by it's interaction.
     * @param interaction Discord Interaction.
     * @returns The fetched message.
     */
    public async fetchMessage(interaction: CommandInteraction): Promise<Message> {
        // @ts-ignore
        const message = await this.bot.api.webhooks(this.bot.user.id, interaction.token).messages('@original').patch({ data: {} });

        // @ts-ignore
        const msg = new Message(this.bot, message);

        return msg
    }


    /**
     * Returns a word in a correct form depending on a number.
     * @param number A number of anything.
     * @param wordsArray Words array.
     * @returns The parsed string.
     */
    public plural(number: number, wordsArray: [string, string, string]) {
        number = + number
        const word = wordsArray[number % 10 == 1 && number % 100 != 11 ? 0 : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20) ? 1 : 2]

        return `${number} ${word}`
    }


    /**
     * Parses the milliseconds and returns the parsed object.
     * @param milliseconds A string or number that contains a milliseconds value.
     * @returns The parsed time object.
     */
    public parseMs(milliseconds: string | number) {
        const ms = Number(milliseconds)
        const round = ms > 0 ? Math.floor : Math.ceil

        return {
            days: round(ms / 86400000),
            hours: round(ms / 3600000) % 24,
            minutes: round(ms / 60000) % 60,
            seconds: round(ms / 1000) % 60
        }
    }
}

export = Utils