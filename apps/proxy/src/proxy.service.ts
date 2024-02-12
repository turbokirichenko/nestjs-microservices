import { Injectable, Inject } from '@nestjs/common';
import { CRYPTO_SERVICE } from './proxy.module';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class ProxyService {
  constructor(@Inject('CRYPTO_SERVICE') private readonly client: ClientProxy) {}

  randomValue(data: string): Observable<string> {
    return this.client.send<string>({ role: 'item', command: 'get-sha256-hash' }, data);
  }
}
