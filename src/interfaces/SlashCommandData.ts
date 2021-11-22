<<<<<<< HEAD
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
=======
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
>>>>>>> 6d39651904cf041dc9a1641c28efa6ed6fd147f6
}