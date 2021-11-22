import { Guild, TextChannel } from 'discord.js'
import { readdirSync } from 'fs'

import SlashCommandData from '../interfaces/SlashCommandData'
import MuteData from '../interfaces/MuteData'

import Event from '../handlers/Event'


export class Ready extends Event {
    constructor() {
        super({
            async run(bot) {
                const cmds: string[] = readdirSync('./src/commands/slash')
                    .filter(x => x.endsWith('.ts'))
                    .map(x => x.slice(0, -3))

                for (let file of cmds) {
                    const commandName = file[0]?.toUpperCase() + file?.slice(1)

                    const SlashCommand = require(`../commands/slash/${file}`)[commandName]
                    const cmd: SlashCommandData = new SlashCommand().cmd

                    bot.slashCommands.set(file, cmd)

                    bot.guilds.cache.map((x: Guild) => {
                        x.commands.create({
                            name: cmd.name,
                            description: cmd.description,
                            options: cmd.options || null
                        })
                    })
                }

                bot.user.setActivity('я котя', {
                    type: 'STREAMING',
                    url: 'https://twitch.tv/a'
                })

                setInterval(() => {
                    const mutes = bot.db.fetch<MuteData[]>('mutes') || []

                    for (let mute of mutes) {
                        const guild = bot.guilds.cache.get(mute.guildID)

                        const user = guild.members.cache.get(mute.userID)
                        const channel = guild.channels.cache.get(mute.channelID) as TextChannel

                        const muteRole =
                            guild.roles.cache.get('702135969369030666') ||
                            guild.roles.cache.get('911262637558480916')


                        if (Date.now() >= mute.endTime) {
                            const botMutes = mutes
                            const muteIndex = botMutes.findIndex(x => x.userID == mute.userID)

                            botMutes.splice(muteIndex, 1)
                            bot.db.set('mutes', botMutes)

                            user.roles.remove(muteRole, 'Окончание мута')

                            channel.send({
                                content: `**${user.user.tag}** был размучен, так как время его мута (**${mute.timeString}**) вышло.`
                            })
                        }
                    }
                }, 1000)

                console.log(`${bot.user.tag} is ready.`)
                console.log(`https://discord.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot%20applications.commands&permissions=2146958847`)
            }
        })
    }
}