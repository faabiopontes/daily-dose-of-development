import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status-enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { User } from '../auth/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
    return this.taskRepository.getTasks(filterDto, user);
  }

  async getTaskById(id: number, user: User): Promise<Task> {
    const found = await this.taskRepository.findOne({
      id,
      user: { id: user.id },
    });

    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return found;
  }

  createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto, user);
  }

  async createMultiplesTasks(
    createTasksDto: CreateTaskDto[],
    user: User,
  ): Promise<Task[]> {
    const createdTasks: Task[] = [];
    for (const createTaskDto of createTasksDto) {
      const createdTask = await this.taskRepository.createTask(
        createTaskDto,
        user,
      );
      createdTasks.push(createdTask);
    }

    return createdTasks;
  }

  async deleteTaskById(id: number, user: User): Promise<void> {
    const { affected } = await this.taskRepository.delete({
      id,
      user: { id: user.id },
    });

    if (affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }

  async updateTaskStatus(
    id: number,
    status: TaskStatus,
    user: User,
  ): Promise<Task> {
    const task = await this.taskRepository.findOne({
      id,
      user: { id: user.id },
    });

    if (!task) {
      throw new Error('Task ID Not Found');
    }

    task.status = status;
    return task.save();
  }
}
