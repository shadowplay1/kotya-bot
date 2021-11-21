import { readdirSync } from 'fs'
import { Guild } from 'discord.js'

import Event from '../handlers/Event'

import Kotyabot from '../classes/Kotyabot'

import { SlashCommandData } from '../interfaces/SlashCommandData'

export class GuildCreate extends Event {
    constructor() {
        super({
            async run(bot: Kotyabot, guild: Guild) {
                const cmds: string[] = readdirSync('./src/commands/slash/')
                    .filter(x => x.endsWith('.ts'))
                    .map(x => x.slice(0, -3))

                for (const file of cmds) {
                    const commandName = file[0]?.toUpperCase() + file?.slice(1)

                    // eslint-disable-next-line
                    const SlashCommand = require(`../commands/slash/${file}`)[commandName]
                    const cmd: SlashCommandData = new SlashCommand().cmd

                    guild.commands.create({
                        name: cmd.name,
                        description: cmd.description,
                        options: cmd.options || null
                    })
                }
            }
        })
    }
}