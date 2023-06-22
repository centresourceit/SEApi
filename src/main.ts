import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  // const cwd = process.cwd();
  // app.useStaticAssets(join(cwd, '/public'));

  //global validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  app.enableCors({
    origin: true,
    credentials: true,
  });
  await app.listen(5573);
  console.log(`Application is running on: ${await app.getUrl()}`);
  // console.log(join(cwd, '/assets/images'));
}
bootstrap();
