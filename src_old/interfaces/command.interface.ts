export interface CommandOptions {
    name: string,
    required: boolean,
    type: ArgumentTypes,
    description: string
}

type ArgumentTypes = keyof typeof ArgumentEnum

const enum ArgumentEnum {
    SUB_COMMAND,
    SUB_COMMAND_GROUP,
    STRING,
    INTEGER,
    BOOLEAN,
    USER,
    CHANNEL,
    ROLE,
    MENTIONABLE,
    NUMBER,
}