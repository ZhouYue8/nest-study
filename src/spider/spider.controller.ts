import { Controller, Get } from '@nestjs/common';
import { SpiderService } from './spider.service';
@Controller('spider')
export class SpiderController {
  constructor(private readonly spiderService: SpiderService) {}

  @Get()
  getCosplay() {
    return true;
  }
}
