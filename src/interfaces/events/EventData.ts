import Kotyabot from '../../classes/Kotyabot';

interface EventData {
    name: string
    fn(bot: Kotyabot, ...args: any[]): void
}

export = EventData