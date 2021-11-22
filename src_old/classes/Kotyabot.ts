import { Client, Collection } from 'discord.js'
// import { readdirSync } from 'fs'

import db from 'quick.db'

import { BotToken } from '../../config.json'

import { CommandData } from '../interfaces/CommandData'
import { Database } from '../interfaces/database.interface'
import { EventData } from '../interfaces/events/EventData'
import { SlashCommandData } from '../interfaces/SlashCommandData'

import Utils from '../managers/Utils'

class Kotyabot extends Client {
    public commands: Collection<string, CommandData> = new Collection()
    public slashCommands: Collection<string, SlashCommandData> = new Collection()

    public events: Collection<string, EventData> = new Collection()
    public utils = new Utils(this)

    public db: Database = db as Database

    public constructor() {
        super({
            restTimeOffset: 0,
            partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
            intents: ['GUILDS', 'GUILD_MEMBERS']
        })
    }

    public start(token?: string) {

        // const loadEvents = () => {
        //     const events = readdirSync('./src/events')
        //         .filter(x => x.endsWith('.ts'))
        //         .map(x => x.slice(0, -3))


        //     for (const eventFileName of events) {
        //         const eventName = eventFileName[0].toUpperCase() + eventFileName.slice(1)
        //         eventName

        //         const Event = require(`../events/${eventFileName}`)[eventName]
        //         const event = new Event()

        //         this.events.set(eventFileName, {
        //             name: eventFileName,
        //             fn: event.run
        //         })

        //         this.on(eventFileName, event.run.bind(null, this))
        //     }
        // }

        // const loadCommands = () => {
        //     const cmds: string[] = readdirSync('./src/commands/standard/')
        //         .filter(x => x.endsWith('.ts'))
        //         .map(x => x.slice(0, -3))

        //     for (const file of cmds) {
        //          const cmd: any = require(`../commands/standard/${file}`)
        //          this.commands.set(file, cmd)
        //     }
        // }

        // loadEvents()
        // loadCommands()

        this.login(token || BotToken)
    }
}

export = Kotyabot