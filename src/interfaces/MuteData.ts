interface MuteData {
    /**
    * Guild ID.
    */
    guildID: string

    /**
     * Muted user's ID.
     */
    userID: string

    /**
     * Mute channel ID.
     */
    channelID: string

    /**
     * Mute time string.
     */
    timeString: string

    /**
     * Mute reason.
     */
    reason: string

    /**
     * Mute end time.
     */
    endTime: number
}

export = MuteData