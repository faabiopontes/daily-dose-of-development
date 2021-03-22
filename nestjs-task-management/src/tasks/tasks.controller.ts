import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status-enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { Response } from 'express';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto) {
    return this.tasksService.getTasks(filterDto);
  }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTaskById(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.deleteTaskById(id);
  }

  @Patch('/:id/status')
  async updateTaskStatus(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  ): Promise<void> {
    try {
      const updatedTask = await this.tasksService.updateTaskStatus(id, status);
      res.json(updatedTask);
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }

  // @Post('/multiples')
  // createMultiplesTasks(@Body('tasks') createTasksDto: CreateTaskDto[]) {
  //   return this.tasksService.createMultiplesTasks(createTasksDto);
  // }
}
