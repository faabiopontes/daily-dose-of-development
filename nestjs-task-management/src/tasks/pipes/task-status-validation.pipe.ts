import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  transform(value: any) {
    value = value.toLocaleUpperCase() as TaskStatus;

    if (!this.isValid(value)) {
      throw new BadRequestException(`${value} is an invalid Task Status`);
    }

    return value;
  }

  private isValid(value) {
    return Object.values(TaskStatus).includes(value);
  }
}
