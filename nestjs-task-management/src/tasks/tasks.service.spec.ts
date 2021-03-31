import { Test } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status-enum';
import { User } from '../auth/user.entity';
import { Task } from './task.entity';
import { NotFoundException } from '@nestjs/common';

const mockTaskRepository = () => ({
  getTasks: jest.fn(),
  findOne: jest.fn(),
});
const mockUser: User = { id: 1, username: 'Fabio Pontes' } as User;
const mockTask: Task = {
  id: 2,
  title: 'Test task',
  description: 'Test desc',
} as Task;

describe('TasksService', () => {
  let tasksService: TasksService;
  let taskRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TaskRepository, useFactory: mockTaskRepository },
      ],
    }).compile();

    tasksService = await module.get<TasksService>(TasksService);
    taskRepository = await module.get<TaskRepository>(TaskRepository);
  });

  describe('getTasks', () => {
    it('gets all tasks from the repository', async () => {
      taskRepository.getTasks.mockResolvedValue('someValue');

      expect(taskRepository.getTasks).not.toHaveBeenCalled();

      const filters: GetTasksFilterDto = {
        status: TaskStatus.IN_PROGRESS,
        search: 'Some search query',
      };

      const result = await tasksService.getTasks(filters, mockUser);

      expect(result).toEqual('someValue');
      expect(taskRepository.getTasks).toHaveBeenCalled();
    });
  });

  describe('getTaskById', () => {
    it('calls taskRepository.findOne() and successfully retrieve and return the task', async () => {
      taskRepository.findOne.mockResolvedValue(mockTask);

      expect(taskRepository.findOne).not.toHaveBeenCalled();

      const result = await tasksService.getTaskById(mockTask.id, mockUser);

      expect(result).toEqual(mockTask);
      expect(taskRepository.findOne).toHaveBeenCalledWith({
        id: mockTask.id,
        user: { id: mockUser.id },
      });
    });

    it('throws an error as task is not found', async () => {
      taskRepository.findOne.mockResolvedValue(null);

      expect(taskRepository.findOne).not.toHaveBeenCalled();

      expect(tasksService.getTaskById(mockTask.id, mockUser)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
