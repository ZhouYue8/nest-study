import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ResponseType } from './common/response';
import { CatchTypeFilter } from './common/catch';
function LoggerMiddleWare(req: Request, res: Response, next) {
  console.log('LoggerMiddleWare');
  next();
}
const bootstrap = async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.use(LoggerMiddleWare);
  app.useGlobalFilters(new CatchTypeFilter());
  // app.useGlobalGuards(new RolesGuard()); // 全局中使用守卫
  app.useGlobalInterceptors(new ResponseType());
  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: '/static',
  });
  await app.listen(3000);
};
bootstrap().then(() => console.log('http://localhost:3000'));
