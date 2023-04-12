import { Injectable } from '@nestjs/common';
import Task from 'src/domain/Task';
import data from '../Tasks';

@Injectable()
export default class ManagementData {

    public create(task: Task) {
        try {
            const jsonTask = this.getTaskAsJSON(task);
            data.tasks.push(jsonTask)
        } catch (error) {
            throw error;
        }
    }

    public findAll() {
        return data.tasks;
    }

    private getTaskAsString(task: Task) {
        return JSON.stringify(task);
    }

    private getTaskAsJSON(task: Task) {
        return JSON.parse(this.getTaskAsString(task));
    }
}