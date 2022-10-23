import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateLoginDto {
  @IsNotEmpty({
    message: '姓名不能为空',
  })
  @IsString()
  name: string;
  @IsNumber()
  age: number;
}
