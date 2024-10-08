/**
 * @interface TaskRepositoryPort
 */
class TaskRepositoryPort {
    /**
     * @param {Task} task
     * @returns {Promise<void>}
     */
    save(task) {
        throw new Error('Method not implemented.');
    }
}

module.exports = TaskRepositoryPort;
