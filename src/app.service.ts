import { Injectable } from '@nestjs/common';
import { api } from '../proto/api';

@Injectable()
export class AppService {
  getData(): api.SomeResponse {
    return { message: 'Welcome to tRPC with NestJS!' };
  }
}