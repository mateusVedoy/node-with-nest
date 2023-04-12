import { Injectable } from "@nestjs/common";
import Tasks from "src/infraestructure/repository/TasksRepository";

@Injectable()
export default class FindAllTasks {

    public constructor(
        private readonly taskRepository: Tasks
    ){}

    public findAll() {
        return this.taskRepository.getAllTasks();
    }
}