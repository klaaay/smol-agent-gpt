import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from './server';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const server = new Server(app);
  await server.listen(process.env.PORT || 3000);
}

bootstrap();