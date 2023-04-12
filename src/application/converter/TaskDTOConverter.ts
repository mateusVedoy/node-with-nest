import Task from "src/domain/Task";
import TaskDTO from "../dto/ITaskDTO";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class TaskDTOConverter {
    public convert(obj: any): Task {

        if(this.isInValid(obj))
            throw new Error("Cannot convert received data to Task");
        else if(!this.isThereTask(obj))
            throw new Error("There's no task to recover on received data"); 

        const taskDTO: TaskDTO = obj.task;

        return new Task(taskDTO.userName, taskDTO.when, taskDTO.whichTime, taskDTO.where);
    }

    private isInValid(obj: any): boolean {
        return obj == null || obj == ""; 
    }

    private isThereTask(obj: any): boolean {
        return obj.task != null;
    }
}