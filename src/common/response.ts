import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class ResponseType implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('NestInterceptor');
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          status: 0,
          message: '获取数据成功',
          success: true,
        };
      }),
    );
  }
}
