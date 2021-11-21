import {
  Client, CommandInteraction
} from 'discord.js'

import { CommandOptions } from '../interfaces/command.interface'

export abstract class SlashCommand {
  public name: string
  public category: string
  public ownerOnly?: boolean = true

  public options: CommandOptions[]

  public description: string

  abstract run(client: Client, interaction: CommandInteraction, args: string[]): Promise<void>
}