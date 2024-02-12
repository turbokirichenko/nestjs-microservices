import { NestFactory } from '@nestjs/core';
import { CryptoModule } from './crypto.module';

async function bootstrap() {
  const app = await NestFactory.create(CryptoModule);
  await app.listen(3000);
}
bootstrap();
