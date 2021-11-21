import {
    CommandInteraction,
    ApplicationCommandOptionData
} from 'discord.js'

import Kotyabot from '../classes/Kotyabot'

export interface SlashCommandData {
    name: string,
    category: string,
    ownerOnly: boolean,

    options: ApplicationCommandOptionData[]
    description: string,

    run(bot: Kotyabot, interaction: CommandInteraction, args: string[]): Promise<void>
}