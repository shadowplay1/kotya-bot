import { MessageEmbed } from 'discord.js'

import SlashCommand from '../../handlers/SlashCommand'
import MuteData from '../../interfaces/MuteData'


export class Mutelist extends SlashCommand {
    constructor() {
        super({
            name: 'mutelist',
            category: 'Модерация',
            ownerOnly: false,

            options: [],

            description: 'Показывает список всех мутов на сервере',

            async run(bot, interaction) {
                const mutes = bot.db.fetch<MuteData[]>('mutes')
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

                                return `${i + 1} - **${member.user.tag}**: ${x.timeString}, причина - **${x.reason || 'не указана'}**`
                            }).join('\n'))
                    ]
                })
            }
        })
    }
}