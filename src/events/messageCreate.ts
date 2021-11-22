import { Message } from 'discord.js'

import Event from '../handlers/Event'
import CommandData from '../interfaces/CommandData'

export class MessageCreate extends Event {
    constructor() {
        super({
            async run(bot, message: Message) {
                const prefix: string = '!'
                const content = message.content

                const args = content.trim().split(/ +/g).slice(1)
                const command = content.trim().split(/ +/g)[0].slice(prefix.length)

                const BotCommand: any = bot.commands.get(command)
                if (!BotCommand) return

                const cmd: CommandData = new BotCommand().cmd

                if (!message.content.startsWith(prefix)) {
                    bot.db.add(`usage.standard.${cmd.name}`, 1)

                    cmd.run(bot, message, args).catch((err: Error) => message.reply((err.name || 'Error') + ': ' + err.message))
                }
            }
        })
    }
}