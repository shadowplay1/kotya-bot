import ms from 'ms'

import { SlashCommand } from '../../abstract-slash.command'
import { IMute } from './mute.interface'

import { parseMs } from '../../../core/utils/parse-ms.util'
import { pluralTime } from '../../../core/utils/plural-time.util'

import { ApplicationCommandOption } from 'discord.js'

export class Mute extends SlashCommand {

    name = 'mute'
    category = 'Moderation'
    ownerOnly = false

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

    description = 'Мутит указанного пользователя'

    async run(bot, interaction, args) {
        const [user, time, reason] = args

        const muteRole =
            interaction.guild.roles.cache.get('702135969369030666') ||
            interaction.guild.roles.cache.get('911262637558480916')

        const msMuteTime = ms(time)

        const muteTimeobject = parseMs(msMuteTime)
        const number = time.slice(-1)


        const timeStrings = pluralTime(number, muteTimeobject)

        const author = interaction.guild.members.cache.get(interaction.user.id)
        const muteUser = interaction.guild.members.cache.get(user)

        const muteTimeString = timeStrings.join(', ')


        if (!author.permissions.has('MANAGE_MESSAGES'))
            return interaction.reply({
                content: 'У тебя нет прав. О чём ты думаешь, используя эту команду?',
                ephemeral: true
            })

        if (!interaction.guild.me.permissions.has('MANAGE_ROLES'))
            return interaction.reply({ content: 'Чтобы мутить, мне необходимо право на __выдачу ролей__.' })

        if (!muteRole)
            return interaction.reply({ content: 'Я не могу найти мут роль.' })

        if (!msMuteTime)
            return interaction.reply({ content: 'Укажи __правильное__ время.', ephemeral: true })

        muteUser.roles.add(
            muteRole,
            `Выдача мута модератором ${author.user.tag}${reason ? ` по причине "${reason}".` : '.'}`
        )

        bot.db.push/*<IMute>*/('mutes', {
            guildID: interaction.guild.id,
            userID: muteUser.id,
            channelID: interaction.channel.id,
            timeString: muteTimeString,
            reason,
            endTime: Date.now() + Number(msMuteTime)
        })

        interaction.reply({
            content:
                `**${muteUser.user.tag}** был замучен на **${muteTimeString}** ` +
                `модератором **${author.user.tag}**${reason ? ` по причине "**${reason}**".` : '.'}`
        })


    }
}