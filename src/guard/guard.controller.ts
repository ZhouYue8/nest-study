import { Controller, Get, UseGuards } from '@nestjs/common';
import { GuardService } from './guard.service';
import { RolesGuard } from './guards/roles.guard';
import { ReqUrl, Roles } from './decorator/roles.decorator';
@Controller('guard')
@UseGuards(RolesGuard) //单个控制器中使用
export class GuardController {
  constructor(private readonly guardService: GuardService) {}

  @Get()
  @Roles('admin')
  findAll(@ReqUrl() url: string) {
    console.log(url);
    return this.guardService.findAll();
  }
}
