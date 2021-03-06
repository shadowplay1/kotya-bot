import EventRunFunction from '../interfaces/events/RunFunction'

class Event {
    public run: typeof EventRunFunction

    constructor(options: EventOptions) {
        this.run = options.run
    }
}

interface EventOptions {
    run: typeof EventRunFunction
}

export = Event