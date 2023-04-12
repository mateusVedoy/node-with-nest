import Task from "src/domain/Task";
import TaskDTOConverter from "../converter/TaskDTOConverter";
import Tasks from "src/infraestructure/repository/TasksRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class CreateTask {

    public constructor(
        private readonly taskDTOConverter: TaskDTOConverter,
        private readonly taskRepo: Tasks
    ) {}

    public create(dto: any): Task {
        try {
            const task: Task = this.taskDTOConverter.convert(dto);
            this.taskRepo.save(task);
            return task;
        } catch (error) {
            throw error;
        }
    }
}