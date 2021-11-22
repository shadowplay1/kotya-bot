import { MessageEmbed } from 'discord.js'

import { SlashCommand } from '../../abstract-slash.command'
import { IMute } from './mute.interface'


export class Mutelist extends SlashCommand {
    name = 'mute'
    category = 'Moderation'
    ownerOnly = false

    description: 'Показывает список всех мутов на сервере'

    options: ApplicationCommandOption[] = [
        {
            name: 'пользователь',
            required: true,
            type: 'USER',
            description: 'Пользователь, которого надо замутить'
        },
        {
            name: 'время',
            required: true,
            type: 'STRING',
            description: 'Время, на которое надо замутить'
        },
        {
            name: 'причина',
            required: false,
            type: 'STRING',
            description: 'Причина, по которой надо замутить'
        }
    ]

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

}