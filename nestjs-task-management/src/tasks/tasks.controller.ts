import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { Response } from 'express';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { get } from 'http';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      return this.tasksService.getTasksWithFilters(filterDto);
    }

    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string, @Res() res: Response) {
    try {
      this.tasksService.deleteTaskById(id);
      res.status(HttpStatus.NO_CONTENT).json();
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }

  @Patch('/:id/status')
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

  @Post('/multiples')
  createMultiplesTasks(@Body('tasks') createTasksDto: CreateTaskDto[]) {
    return this.tasksService.createMultiplesTasks(createTasksDto);
  }
}
