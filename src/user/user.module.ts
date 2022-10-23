import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MiddlewareConsumer } from '@nestjs/common/interfaces/middleware/middleware-consumer.interface';
import { LoggerMiddleware } from '../middleware/logger.middleware';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'aaa',
      useClass: UserService,
    },
    {
      provide: 'test',
      useValue: '828',
    },
    {
      provide: 'apply',
      useFactory(): number {
        return 1;
      },
    },
  ],
  exports: [],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 1.可以放入一个路径
    // consumer.apply(LoggerMiddleware).forRoutes('/user');
    // 2.可以通过传递一个对象
    // consumer.apply(LoggerMiddleware).forRoutes({
    //   path: 'user',
    //   method: RequestMethod.GET,
    // });
    // 3.可以直接传递一个控制器 控制器中所有的请求
    consumer.apply(LoggerMiddleware).forRoutes(UserController);
  }
}
