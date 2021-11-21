import { SlashCommandData } from '../interfaces/SlashCommandData'

class SlashCommand {
    public cmd: SlashCommandData
    constructor(command: SlashCommandData) {
        this.cmd = command
    }
}

export = SlashCommand