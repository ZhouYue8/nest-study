import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { UserService } from './user.service';
import Users from './dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject('aaa') private readonly aaaService: UserService,
    @Inject('test') private readonly test: string,
    @Inject('apply') private readonly apply: number,
  ) {}
  @Get()
  getUser(): Array<Users> {
    return this.userService.getUser();
  }
  @Get('aaa')
  async getAaaUser(): Promise<Array<Users>> {
    const data = this.aaaService.getUser();
    data.push({
      id: 5,
      name: '周六',
    });
    return data;
  }
  @Get('test')
  getTestUser(): string {
    return this.test;
  }
  @Get('apply')
  getApplyUser(): number {
    return this.apply;
  }
  @Get('catch')
  async findAll() {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
