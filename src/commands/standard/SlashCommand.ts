import { Client, ApplicationCommandOptionData, CommandInteraction } from 'discord.js'

abstract class SlashCommand {
  public name!: string
  public category!: string
  public ownerOnly?: boolean = true
  public options!: ApplicationCommandOptionData
  public description!: string // лучше это вынести, потом придумаем
  
  abstract run(client: Client, interaction: CommandInteraction, args: string[]): Promise<void>
}