import { Message } from 'discord.js';
import Kotyabot from '../classes/Kotyabot';

interface CommandData {
    name: string,
    run(bot: Kotyabot, message: Message, args: string[]): Promise<any>
}

export = CommandData