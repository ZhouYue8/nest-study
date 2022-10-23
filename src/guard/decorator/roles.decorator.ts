import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('role', roles);

export const ReqUrl = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    console.log('Decorator');
    const req = ctx.switchToHttp().getRequest<Request>();
    return req.url;
  },
);
