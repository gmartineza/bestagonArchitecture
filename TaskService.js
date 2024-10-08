class TaskService {
    constructor(taskRepositoryPort) {
        this.taskRepositoryPort = taskRepositoryPort;
    }

    async createTask(task) {
        await this.taskRepositoryPort.save(task);
    }
}

module.exports = TaskService;
 