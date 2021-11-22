<<<<<<< HEAD
import { Message } from 'discord.js'
import Kotyabot from '../classes/Kotyabot'

export interface CommandData {
    name: string,
    run(bot: Kotyabot, message: Message, args: string[]): Promise<any>
=======
import { Message } from 'discord.js'
import Kotyabot from '../classes/Kotyabot'

export interface CommandData {
    name: string,
    run(bot: Kotyabot, message: Message, args: string[]): Promise<any>
>>>>>>> 6d39651904cf041dc9a1641c28efa6ed6fd147f6
}