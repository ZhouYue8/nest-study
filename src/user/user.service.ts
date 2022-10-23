import { Injectable } from '@nestjs/common';
import Users from './dtos/user.dto';

@Injectable()
export class UserService {
  getUser(): Array<Users> {
    return [
      {
        id: 1,
        name: '张三',
      },
      {
        id: 2,
        name: '李四',
      },
      {
        id: 3,
        name: '王五',
      },
    ];
  }
}
