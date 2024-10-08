class NotificationService extends NotificationServicePort {
    constructor() {
        super();
    }

    /**
     * @param {string} message
     * @returns {Promise<void>}
     */
    async send(message) {
        console.log(message);
    }
}

module.exports = NotificationService;
