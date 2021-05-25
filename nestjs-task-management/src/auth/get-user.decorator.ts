import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { RequestWithUser } from './types';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest<RequestWithUser>();
    return req.user;
  },
);
