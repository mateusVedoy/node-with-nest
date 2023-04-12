import { Module } from '@nestjs/common';
import TaskController from './application/controller/TaskController';
import CreateTaskUseCase from './application/useCase/CreateTask';
import TaskDTOConverter from './application/converter/TaskDTOConverter';
import TaskRepository from './infraestructure/repository/TasksRepository';
import FindAllTasksUseCase from './application/useCase/FindAllTasks';
import ManagementData from './infraestructure/local-repository/service/ManagementData'

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [CreateTaskUseCase, FindAllTasksUseCase, TaskDTOConverter, TaskRepository, ManagementData],
})
export default class AppModule {}