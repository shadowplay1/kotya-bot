<<<<<<< HEAD
import { inspect } from 'util'

import Command from '../../handlers/Command'


class Eval extends Command {
    constructor() {
        super({
            name: 'eval',

            async run(bot, message, args) {
                if (message.author.id !== '873924376293179402') return

                function clean(text: string) {
                    if (typeof text == 'string')
                        return text.replace(/`/g, '`' + String.fromCharCode(8203))
                            .replace(/@/g, '@' + String.fromCharCode(8203))
                    else return text
                }

                try {
                    const code = args.join(' ')
                    let evaled = eval(code.includes('await') ? `(async() { ${code} })()` : code)

                    message.react('✅')

                    if (typeof evaled !== 'string') evaled = inspect(evaled)
                    if (evaled == 'Promise { <pending> }') return

                    message.channel.send(`\`\`\`js\n${clean(evaled)}\`\`\``)

                } catch (err) {
                    message.react('❌')
                    message.channel.send(`\`Error:\` \`\`\`js\n${clean(err)}\n\`\`\``)
                }
            }
        })
    }
}

=======
import { inspect } from 'util'

import Command from '../../handlers/Command'


class Eval extends Command {
    constructor() {
        super({
            name: 'eval',

            async run(bot, message, args) {
                if (message.author.id !== '873924376293179402') return

                function clean(text: string) {
                    if (typeof text == 'string')
                        return text.replace(/`/g, '`' + String.fromCharCode(8203))
                            .replace(/@/g, '@' + String.fromCharCode(8203))
                    else return text
                }

                try {
                    const code = args.join(' ')
                    let evaled = eval(code.includes('await') ? `(async() { ${code} })()` : code)

                    message.react('✅')

                    if (typeof evaled !== 'string') evaled = inspect(evaled)
                    if (evaled == 'Promise { <pending> }') return

                    message.channel.send(`\`\`\`js\n${clean(evaled)}\`\`\``)

                } catch (err) {
                    message.react('❌')
                    message.channel.send(`\`Error:\` \`\`\`js\n${clean(err)}\n\`\`\``)
                }
            }
        })
    }
}

>>>>>>> 6d39651904cf041dc9a1641c28efa6ed6fd147f6
export = Eval