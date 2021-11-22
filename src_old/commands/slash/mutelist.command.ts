import { MessageEmbed } from 'discord.js'

import SlashCommand from '../../handlers/SlashCommand'
import { IMute } from '../../interfaces/mute.interface'


export class Mutelist extends SlashCommand {
    constructor() {
        super({
            name: 'mutelist',
            category: 'Moderation',
            ownerOnly: false,

            options: [],

            description: 'Показывает список всех мутов на сервере',

            async run(bot, interaction) {
                const mutes = bot.db.fetch<IMute[]>('mutes')
                    .filter(x => x.guildID == interaction.guild.id)

                if (!mutes.length) return interaction.reply({
                    content: 'На сервере пока нет ни одного мута.',
                    ephemeral: true
                })

                interaction.reply({
                    embeds: [
                        new MessageEmbed()
                            .setAuthor('Список мутов сервера', interaction.guild.iconURL({ format: 'png' }))
                            .setDescription(mutes.map((x, i) => {
                                const member = interaction.guild.members.cache.get(x.userID)

                                return `${i + 1} - **${member.user.tag}**: ${x.timeString},` +
                                    `причина - **${x.reason || 'не указана'}**`
                            }).join('\n'))
                    ]
                })
            }
        })
    }
}