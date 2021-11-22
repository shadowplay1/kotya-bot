import SlashCommand from '../../handlers/SlashCommand'
import ms from 'ms'
import MuteData from '../../interfaces/MuteData'

export class Mute extends SlashCommand {
    constructor() {
        super({
            name: 'mute',
            category: 'Модерация',
            ownerOnly: false,

            options: [
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
            ],

            description: 'Мутит указанного пользователя',

            async run(bot, interaction, args) {
                const [user, time, reason] = args
                const mutes = bot.db.fetch<MuteData[]>('mutes') || []

                const muteRole =
                    interaction.guild.roles.cache.get('702135969369030666') ||
                    interaction.guild.roles.cache.get('911262637558480916')

                const splittedTimeString = time
                    .replace('d', ' d')
                    .replace('h', ' h')
                    .replace('m', ' m')
                    .replace('s', ' s')


                const msMuteTime = ms(time)

                const muteTimeobject = bot.utils.parseMs(msMuteTime)
                const [number] = splittedTimeString.split(' ')


                let timeStrings: string[] = []

                if (muteTimeobject.days)
                    timeStrings.push(
                        bot.utils.plural(Number(number), ['день', 'дня', 'дней'])
                    )

                if (muteTimeobject.hours)
                    timeStrings.push(
                        bot.utils.plural(Number(number), ['час', 'часа', 'часов'])
                    )

                if (muteTimeobject.minutes)
                    timeStrings.push(
                        bot.utils.plural(Number(number), ['минута', 'минуты', 'минут'])
                    )

                if (muteTimeobject.seconds)
                    timeStrings.push(
                        bot.utils.plural(Number(number), ['секунд', 'секунды', 'секунд'])
                    )


                const author = interaction.guild.members.cache.get(interaction.user.id)
                const muteUser = interaction.guild.members.cache.get(user)

                const muteTimeString = timeStrings.join(', ')


                if (!author.permissions.has('MANAGE_MESSAGES'))
                    return interaction.reply({ content: `У тебя нет прав. О чём ты думаешь, используя эту команду?`, ephemeral: true }).catch(() => { })

                if (!interaction.guild.me.permissions.has('MANAGE_ROLES'))
                    return interaction.reply({ content: `Чтобы мутить, мне необходимо право на __выдачу ролей__.` }).catch(() => { })

                if (!muteRole)
                    return interaction.reply({ content: 'Я не могу найти мут роль.' }).catch(() => { })

                if (!msMuteTime)
                    return interaction.reply({ content: 'Укажи __правильное__ время.', ephemeral: true }).catch(() => { })

                muteUser.roles.add(muteRole, `Выдача мута модератором ${author.user.tag}${reason ? ` по причине "${reason}".` : '.'}`)

                bot.db.push<MuteData>('mutes', {
                    guildID: interaction.guild.id,
                    userID: muteUser.id,
                    channelID: interaction.channel.id,
                    timeString: muteTimeString,
                    reason,
                    endTime: Date.now() + msMuteTime
                })

                interaction.reply({
                    content:
                        `**${muteUser.user.tag}** был замучен на **${muteTimeString}** ` +
                        `модератором **${author.user.tag}**${reason ? ` по причине "**${reason}**".` : '.'}`
                }).catch(() => { })
            }
        })
    }
}