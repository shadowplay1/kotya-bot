<<<<<<< HEAD
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
=======
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
>>>>>>> 6d39651904cf041dc9a1641c28efa6ed6fd147f6
    'USER'