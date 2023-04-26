import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // app.use(helmet());
  
  //global validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(5573);
}
bootstrap();
