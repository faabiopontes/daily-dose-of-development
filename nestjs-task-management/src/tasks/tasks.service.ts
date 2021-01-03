import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;
    return this.getAllTasks().filter((task) => {
      let show = true;

      if (status) {
        show = show && task.status === status;
      }

      if (search) {
        show =
          show &&
          (task.description.includes(search) || task.title.includes(search));
      }

      return show;
    });
  }

  createMultiplesTasks(createTasksDto: CreateTaskDto[]) {
    createTasksDto.forEach((createTaskDto) => this.createTask(createTaskDto));

    return this.getAllTasks();
  }

  getTaskById(id: string): Task {
    const found = this.tasks.find((task) => task.id === id);

    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return found;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description, status } = createTaskDto;

    const task: Task = {
      id: uuidv4(),
      title,
      description,
      status: status ?? TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  deleteTaskById(id: string): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      throw new Error('Task ID Not Found');
    }

    this.tasks.splice(taskIndex, 1);
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      throw new Error('Task ID Not Found');
    }

    this.tasks[taskIndex] = { ...this.tasks[taskIndex], status };
    return this.tasks[taskIndex];
  }
}
