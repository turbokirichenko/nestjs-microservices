import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ProxyService } from './proxy.service';

@Controller()
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @Get('get-hash/:data')
  async getRandomValue(@Param('data') data: string) {
    return this.proxyService.randomValue(data);
  }
}
