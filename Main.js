const Task = require('./task');
const InMemoryTaskRepository = require('./InMemoryTaskRepository');
const TaskService = require('./TaskService');


function main() {
    const taskRepository = new InMemoryTaskRepository();
    const taskService = new TaskService(taskRepository);
    const task = new Task('Task 1', 'Description 1');

    taskService.createTask(task);
    console.log(taskRepository.tasks);
}

main();