import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { TRPCController } from '@trpc/server/adapters/next';
import { createRouter } from '../proto/api';

@Controller()
export class AppController extends TRPCController<typeof createRouter> {
  constructor(private readonly appService: AppService) {
    super();
    this.router = createRouter().merge('app.', appService.router);
  }
}