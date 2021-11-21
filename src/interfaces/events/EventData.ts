import Kotyabot from '../../classes/Kotyabot'

export interface EventData {
    name: string
    fn(bot: Kotyabot, ...args: any[]): void
}