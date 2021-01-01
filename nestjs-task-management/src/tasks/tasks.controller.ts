import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { Response } from 'express';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete(':id')
  deleteTaskById(@Param('id') id: string, @Res() res: Response) {
    try {
      this.tasksService.deleteTaskById(id);
      res.status(HttpStatus.NO_CONTENT).json();
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }

  @Patch(':id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Res() res: Response,
    @Body('status') status: TaskStatus,
  ) {
    try {
      const updatedTask = this.tasksService.updateTaskStatus(id, status);
      res.json(updatedTask);
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
