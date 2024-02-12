import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProxyController } from './proxy.controller';
import { ProxyService } from './proxy.service';

export const CRYPTO_SERVICE = 'CRYPTO_SERVICE'

@Module({
  imports: [ ClientsModule.register([
    { name: 'CRYPTO_SERVICE', transport: Transport.TCP }
  ])],
  controllers: [ProxyController],
  providers: [ProxyService],
})
export class ProxyModule {}
