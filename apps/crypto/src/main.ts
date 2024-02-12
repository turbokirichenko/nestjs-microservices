import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { CryptoModule } from './crypto.module';

async function bootstrap() {
  const transport = Transport.TCP;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(CryptoModule, {
    transport
  });
  app.listen();
}
bootstrap();
