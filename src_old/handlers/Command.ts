import { CommandData } from '../interfaces/CommandData'

class Command {
    public cmd: CommandData
    constructor(command: CommandData) {
        this.cmd = command
    }
}

export = Command