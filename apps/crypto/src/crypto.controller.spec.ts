import { Test, TestingModule } from '@nestjs/testing';
import { CryptoController } from './crypto.controller';
import { CryptoService } from './crypto.service';

describe('CryptoController', () => {
  let cryptoController: CryptoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CryptoController],
      providers: [CryptoService],
    }).compile();

    cryptoController = app.get<CryptoController>(CryptoController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cryptoController.getHello()).toBe('Hello World!');
    });
  });
});
