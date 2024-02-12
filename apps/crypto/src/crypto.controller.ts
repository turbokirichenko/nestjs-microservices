import { Controller } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @MessagePattern({ role: 'item', command: 'get-sha256-hash' })
  getRandomValue(data: string): string {
    return this.cryptoService.generateRandomValue(data);
  }
}
