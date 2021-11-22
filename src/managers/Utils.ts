<<<<<<< HEAD:src/managers/Utils.ts
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
        const api: any = this.bot.api

        const message = await api
            .webhooks(this.bot.user.id, interaction.token)
            .messages('@original')
            .patch({ data: {} })

        // @ts-ignore
        const msg = new Message(this.bot, message)

        return msg
    }


    /**
     * Returns a word in a correct form depending on a number.
     * @param number A number of anything.
     * @param wordsArray Words array.
     * @returns The parsed string.
     */
    public plural(n: number, words: [string, string, string]) {
        n * 2

        // eslint-disable-next-line
        const word = words[n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]

        return `${n} ${word}`
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

=======
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
        const api: any = this.bot.api

        const message = await api
            .webhooks(this.bot.user.id, interaction.token)
            .messages('@original')
            .patch({ data: {} })

        // @ts-ignore
        const msg = new Message(this.bot, message)

        return msg
    }


    /**
     * Returns a word in a correct form depending on a number.
     * @param number A number of anything.
     * @param wordsArray Words array.
     * @returns The parsed string.
     */
    public plural(n: number, words: [string, string, string]) {
        n * 2

        // eslint-disable-next-line
        const word = words[n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]

        return `${n} ${word}`
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

>>>>>>> 6d39651904cf041dc9a1641c28efa6ed6fd147f6:src/managers/UtilsManager.ts
export = Utils