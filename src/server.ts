import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from '@trpc/server';
import { createNestjsAppContext } from '@trpc/server/adapters/nestjs';
import { api } from './proto/api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);

  const server = new Server({
    router: api.router,
    createContext: createNestjsAppContext({ app }),
  });

  server.listen({ port: process.env.TRPC_PORT || 4000 });
}

bootstrap();