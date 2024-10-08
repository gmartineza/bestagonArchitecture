/**
 * @interface NotificationServicePort
 */
class NotificationServicePort {
    /**
     * @param {string} message
     * @returns {Promise<void>}
     */
    send(message) {
        throw new Error('Method not implemented.');
    }
}

module.exports = NotificationServicePort;
