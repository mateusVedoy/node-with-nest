import { Injectable } from "@nestjs/common";
import Task from "src/domain/Task";
import ManagementData from "../local-repository/service/ManagementData";

@Injectable()
export default class TasksRepository {

    public constructor(
        private readonly management: ManagementData
    ){}

    public save(task: Task): void {
        try {
            this.management.create(task);
        } catch (error) {
            throw error;
        }
    }

    public getAllTasks() {
        return this.management.findAll();
    }
}