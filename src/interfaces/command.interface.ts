export interface CommandOptions {
    name: string,
    required: boolean,
    type: ArgumentTypes,
    description: string
}

type ArgumentTypes =
    'BOOLEAN' | 'CHANNEL' | 'INTEGER' |
    'MENTIONABLE' | 'NUMBER' | 'ROLE' |
    'STRING' | 'SUB_COMMAND' | 'SUB_COMMAND_GROUP' |
    'USER'