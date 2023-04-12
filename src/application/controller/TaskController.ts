import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateTask from '../useCase/CreateTask';
import FindAllTasks from '../useCase/FindAllTasks';

@Controller("/task")
export default class TaskController {

    public constructor(
        private readonly createTask: CreateTask,
        private readonly findAllTasks: FindAllTasks
    ){}

    @Post("/create")
    public create(@Body() dto: any) {
        try {
            const task = this.createTask.create(dto);
            return {
                status: 201,
                response: "Task created successfully",
                content: task
            }

        } catch (error) {
            return {
                status: 400,
                response: error.message
            }
        }
    }

    @Get("/all")
    public getAll() {
        try {
            const tasks = this.findAllTasks.findAll();
            return {
                status: 200,
                response: "Tasks recoreved bellow",
                content: tasks
            }
        } catch (error) {
            return {
                status: 400,
                response: error.message
            }
        }
    }
}