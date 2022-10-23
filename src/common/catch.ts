import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class CatchTypeFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): any {
    console.log('ExceptionFilter');
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    response.status(status).json({
      success: false,
      time: new Date(),
      data: exception.message,
      status,
      path: request.url,
    });
  }
}
