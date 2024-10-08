const TaskRepositoryPort = require('./TaskRepositoryPort');

class InMemoryTaskRepository extends TaskRepositoryPort {
    constructor() {
        super();
        this.tasks = [];
    }

    /**
     * @param {Task} task
     * @returns {Promise<void>}
     */
    async save(task) {
        this.tasks.push(task);
    }
}

module.exports = InMemoryTaskRepository;
