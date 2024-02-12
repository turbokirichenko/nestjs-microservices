import { Injectable } from '@nestjs/common';
import * as crypto from 'node:crypto';

const CRYPTO_PREFIX = 'edqwdbwckcbec@**@!&1s9@(#)#_'

@Injectable()
export class CryptoService {

  generateRandomValue(data: string): string {
    const hash = crypto.createHash('sha256');
    hash.update(CRYPTO_PREFIX);
    hash.update(data);
    return hash.digest('hex');
  }
}
