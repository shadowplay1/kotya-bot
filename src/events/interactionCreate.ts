import { CommandInteraction } from 'discord.js'

import Event from '../handlers/Event'
import Kotyabot from '../classes/Kotyabot'

export class InteractionCreate extends Event {
    constructor() {
        super({
            async run(bot: Kotyabot, interaction: CommandInteraction) {
                if(!interaction.isCommand()) return

                const commandName = interaction.commandName
                const cmd = bot.slashCommands.get(commandName)

                if(!cmd) return

                const args = interaction.options.data

                bot.db.add(`usage.slash.${commandName}`, 1)
                cmd.run(bot, interaction, args.map(x => x.value) as string[])
            }
        })
    }
}