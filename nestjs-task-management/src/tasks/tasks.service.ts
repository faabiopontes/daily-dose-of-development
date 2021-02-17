import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status-enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { TasksController } from './tasks.controller';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  // private readonly tasks: Task[] = [];
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   return this.getAllTasks().filter((task) => {
  //     let show = true;
  //     if (status) {
  //       show = show && task.status === status;
  //     }
  //     if (search) {
  //       show =
  //         show &&
  //         (task.description.includes(search) || task.title.includes(search));
  //     }
  //     return show;
  //   });
  // }
  // createMultiplesTasks(createTasksDto: CreateTaskDto[]) {
  //   createTasksDto.forEach((createTaskDto) => this.createTask(createTaskDto));
  //   return this.getAllTasks();
  // }
  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id);
    // const found = this.tasks.find((task) => task.id === id);
    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return found;
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }

  async deleteTaskById(id: number): Promise<void> {
    const { affected } = await this.taskRepository.delete(id);

    if (affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }

  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const taskIndex = this.tasks.findIndex((task) => task.id === id);
  //   if (taskIndex === -1) {
  //     throw new Error('Task ID Not Found');
  //   }
  //   this.tasks[taskIndex] = { ...this.tasks[taskIndex], status };
  //   return this.tasks[taskIndex];
  // }
}
