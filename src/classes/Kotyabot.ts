import { Client, Collection } from 'discord.js'
import { readdirSync } from 'fs'

import db from 'quick.db'

import { BotToken } from '../../config.json'

import CommandData from '../interfaces/CommandData'
import EventData from '../interfaces/events/EventData'
import SlashCommandData from '../interfaces/SlashCommandData'

import Utils from '../managers/UtilsManager'

class Kotyabot extends Client {
    public commands: Collection<string, CommandData> = new Collection()
    public slashCommands: Collection<string, SlashCommandData> = new Collection()

    public events: Collection<string, EventData> = new Collection()
    public utils = new Utils(this)

    public db = db

    public constructor() {
        super({
            restTimeOffset: 0,
            partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
            intents: [
                'GUILDS', 'GUILD_BANS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_INTEGRATIONS',
                'GUILD_INVITES', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS',
                'GUILD_MESSAGE_TYPING', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES', 'GUILD_WEBHOOKS',
                'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_TYPING'
            ]
        })
    }

    public start(token?: string) {
        const loadEvents = () => {
            const events = readdirSync('./src/events')
            .filter(x => x.endsWith('.ts'))
            .map(x => x.slice(0, -3))


            for (let eventFileName of events) {
                const eventName = eventFileName[0].toUpperCase() + eventFileName.slice(1)

                const Event = require(`../events/${eventFileName}`)[eventName]
                const event = new Event()

                this.events.set(eventFileName, {
                    name: eventFileName,
                    fn: event.run
                })

                this.on(eventFileName, event.run.bind(null, this))
            }
        }

        const loadCommands = () => {
            const cmds: string[] = readdirSync('./src/commands/standard/')
                .filter(x => x.endsWith('.ts'))
                .map(x => x.slice(0, -3))

            for (let file of cmds) {
                const cmd: CommandData = require(`../commands/standard/${file}`)
                this.commands.set(file, cmd)
            }
        }

        loadEvents()
        loadCommands()

        this.login(token || BotToken)
    }
}

export = Kotyabot